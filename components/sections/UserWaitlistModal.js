import { X, ChevronDown, Check, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
// We need to add query, where, and getDocs to check for unique emails
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';

// --- Custom Dropdown Component (No changes) ---
const CustomDropdown = ({ options, placeholder, value, onChange, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-auto p-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-left flex items-center justify-between hover:border-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
      >
        <span className={value ? "text-white" : "text-neutral-400"}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg z-10 max-h-80 overflow-y-auto scrollbar-hide">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className="w-full h-auto text-neutral-200 px-3 py-2 rounded-none text-left hover:bg-neutral-700 transition-colors flex items-center justify-between"
            >
              <span>{option}</span>
              {value === option && <Check size={16} className="text-white" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


// --- Main User Waitlist Modal Component ---
const UserWaitlistModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    interestedAs: "",
    describesYouBest: "",
    howDidYouHear: "",
    mostExcitedAbout: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  // New state for showing the share link
  const [showShareLink, setShowShareLink] = useState(false);
  // New state to store the generated shareable link
  const [shareableLink, setShareableLink] = useState('');
  // New state to store the referrer's ID if the user came from a referral link
  const [referrerId, setReferrerId] = useState(null);

  // Firebase state
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  // --- Firebase Initialization and Auth Effect ---
  useEffect(() => {
    // WARNING: It is not recommended to hardcode Firebase config in production apps.
    // It's better to use environment variables or a secure backend to provide this configuration.
    const firebaseConfig = {
     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    };

    try {
      const app = initializeApp(firebaseConfig);
      const firestoreDb = getFirestore(app);
      const firebaseAuth = getAuth(app);
      
      setDb(firestoreDb);
      setAuth(firebaseAuth);

      // Authenticate user anonymously
      onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
          // User is signed in.
          setIsAuthReady(true);
          console.log("Firebase authenticated anonymously.");
        } else {
          // User is signed out.
          signInAnonymously(firebaseAuth).catch((error) => {
            console.error("Anonymous sign-in error:", error);
            setError("Could not connect to the server. Please try again later.");
          });
        }
      });

    } catch (e) {
      console.error("Error initializing Firebase:", e);
      setError("Firebase configuration is invalid.");
    }
  }, []);

  // Effect to check for referral ID in the URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const referralId = params.get('referralId');
    if (referralId) {
      setReferrerId(referralId);
    }
  }, []);

  // Regex function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const userTypeOptions = [
    "Gamer - I want to play and earn",
    "Creator - I want to build games/content",
  ];

  const referralOptions = [
    "Google Search",
    "Social Media (Twitter/X, LinkedIn)",
    "Friend or Colleague Referral",
    "Tech News/Blog Article",
    "Podcast or Interview",
    "Conference or Event",
    "Professional Network",
    "Newsletter or Email",
    "Advertisement",
    "Other Website",
    "Direct Link"
  ];

  // Effect to manage body overflow when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // New function to handle closing the modal and resetting states
  const handleClose = () => {
    setIsSuccess(false);
    setShowShareLink(false); // Reset share link state
    setShareableLink(''); // Reset shareable link
    onClose();
  };

  // --- Handle Form Submission ---
  const handleSubmit = async () => {
    // Prevent submission if not ready or already submitting
    if (!isAuthReady || isSubmitting) {
        if(!isAuthReady) console.error("Authentication not ready.");
        return;
    }
    
    // 1. Validate required fields
    if (!formData.fullName || !formData.emailAddress || !formData.interestedAs) {
      setError("Please fill out all required fields (*).");
      return;
    }
    
    // 2. Validate email format
    if (!isValidEmail(formData.emailAddress)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const appId = 'local-7c55a'; // Using projectId as appId for collection path
      const collectionPath = `artifacts/${appId}/public/data/waitlistUsers`;
      const waitlistCollection = collection(db, collectionPath);
      
      // 3. Check for duplicate email addresses
      const q = query(waitlistCollection, where("emailAddress", "==", formData.emailAddress));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError("This email address is already on the waitlist.");
        setIsSubmitting(false);
        return;
      }
      
      // Data to be saved to Firestore, including the referrerId if present
      const submissionData = {
          ...formData,
          submittedAt: new Date().toISOString(), // Add a server-side timestamp
          // Add the referrerId to the document if it exists
          ...(referrerId && { referredBy: referrerId })
      };

      // Add a new document with a generated id.
      const docRef = await addDoc(waitlistCollection, submissionData);
      console.log("Document successfully written with ID: ", docRef.id);
      
      // Generate the shareable link using the document ID as a referral ID
      // This URL should be the actual website URL. Using a placeholder for now.
      const generatedLink = `https://your-website.com/?referralId=${docRef.id}`;
      setShareableLink(generatedLink);
      
      // Set success state instead of closing the modal
      setIsSuccess(true);
      
      // Reset form data after successful submission
      setFormData({
        fullName: "",
        emailAddress: "",
        interestedAs: "",
        describesYouBest: "",
        howDidYouHear: "",
        mostExcitedAbout: ""
      });

    } catch (e) {
      console.error("Error adding document: ", e);
      setError("Failed to submit your information. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  // Function to handle copying the share link to the clipboard
  const handleCopyLink = () => {
    // Using document.execCommand('copy') as navigator.clipboard might not be available in all environments
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = shareableLink;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    // Optionally, show a message that the link was copied
    alert('Link copied to clipboard!'); // Using a non-modal alert here as it is not a critical error message
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="bg-black text-white p-8 rounded-2xl w-full max-w-screen-lg relative shadow-xl shadow-white/20 max-h-[90vh] overflow-y-auto scrollbar-hide">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        {!isSuccess ? (
          // --- Main Waitlist Form UI ---
          <>
            <div className="mb-6 text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <Link href="/" className="flex items-center group">
                  <div className="w-64 lg:w-80  rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
                    <img
                      src="/assets/images/logo/coreGameX.png"
                      alt="CoreGameX Logo"
                      className="w-full h-full  transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const parent = e.target.parentNode;
                        if(parent) {
                            parent.innerHTML = `
                                <div class='w-full h-full bg-neutral-300 rounded-xl flex items-center justify-center shadow-lg'>
                                <span class='text-black font-bold text-2xl lg:text-4xl'>CG</span>
                                </div>
                            `;
                        }
                      }}
                    />
                  </div>
                </Link>
              </div>
              <h2 className="text-3xl font-bold mb-2">Join the Waitlist</h2>
              <p className="text-neutral-300 text-lg">Be among the first to experience the future of gaming. Get early access and exclusive updates.</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className=" text-xl font-medium mb-2 text-neutral-200 flex items-center gap-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full p-3 rounded !bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-neutral-500"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className=" text-xl font-medium mb-2 text-neutral-200 flex items-center gap-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.emailAddress}
                  onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full p-3 rounded !bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-neutral-500"
                />
              </div>

              {/* I am interested as a */}
              <div>
                <label className="block text-xl font-medium mb-2 text-neutral-200">
                  I'm interested as a <span className="text-red-400">*</span>
                </label>
                <CustomDropdown
                  options={userTypeOptions}
                  placeholder="Select what describes you best"
                  value={formData.interestedAs}
                  onChange={(value) => handleInputChange("interestedAs", value)}
                />
              </div>

              {/* How did you hear about us? */}
              <div>
                <label className="block text-xl font-medium mb-2 text-neutral-200">
                  How did you hear about us?
                </label>
                <CustomDropdown
                  options={referralOptions}
                  placeholder="Select your referral source"
                  value={formData.howDidYouHear}
                  onChange={(value) => handleInputChange("howDidYouHear", value)}
                />
              </div>

              {/* What are you most excited about? */}
              <div>
                <label className="block text-xl font-medium mb-2 text-neutral-200">
                  What are you most excited about?
                </label>
                <textarea
                  rows="3"
                  value={formData.mostExcitedAbout}
                  onChange={(e) => handleInputChange("mostExcitedAbout", e.target.value)}
                  placeholder="Tell us what features or aspects you're most looking forward to... (Optional)"
                  className="w-full p-3 rounded-2xl bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-neutral-500 resize-none"
                />
              </div>

              
              
              {/* Error Message */}
              {error && <p className="text-red-400 text-center">{error}</p>}

              {/* Join Button */}
              <button
                type="submit"
                disabled={isSubmitting || !isAuthReady}
                className="w-full bg-gradient-to-r from-neutral-200 to-gray-300 text-neutral-800 font-semibold py-3 px-6 rounded-2xl hover:from-neutral-300 hover:to-gray-400 transition-all duration-100 transform active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
              </button>

              {/* Privacy Notice */}
              <p className="text-lg text-neutral-400 text-center">
                We respect your privacy. You can unsubscribe at any time and we'll never share your information.
              </p>
            </form>
          </>
        ) : (
          // --- Success Message Pop-up UI ---
          <div className="flex flex-col items-center justify-center py-10 px-6 text-center">
            <CheckCircle size={96} className="text-white mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold text-white mb-2">Success!</h2>
            <p className="text-xl text-neutral-300 mb-4">
              Welcome to our family.
            </p>
            <p className="text-lg text-neutral-400 max-w-xl mb-8">
             You'll be informed when we launch and gain access to exclusive beta features and updates.
            </p>
            <button
              onClick={handleClose}
              className="w-full max-w-xs bg-white text-black font-semibold py-3 px-6 rounded-2xl hover:bg-gray-200 transition-colors duration-150 transform active:scale-[0.98] shadow-lg"
            >
              Continue
            </button>
            {/* The Elite Member section has been moved to this location */}
            <div className="text-center mt-6 mb-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Bring your squad — become an Elite Member of CoreGameX and unlock early access & exclusive rewards.
              </h3>
              
              <ul className="text-sm text-neutral-300 space-y-1 text-left inline-block">
                <li className="flex text-lg items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
                  Early access to beta features & early drops
                </li>
                <li className="flex text-lg items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
                  Exclusive updates & behind-the-scenes content
                </li>
                <li className="flex text-lg items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
                  Feedback opportunities
                </li>
                <li className="flex text-lg items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
                  Earn badges & Token perks and more.
                </li>
                
              </ul>
            </div>
            {/* Share with your friends section */}
            <div className="mt-6 w-full max-w-lg">
              {!showShareLink ? (
                <button
                  onClick={() => setShowShareLink(true)}
                  className="w-full text-white font-semibold py-3 px-6 rounded-2xl transition-colors duration-150 transform active:scale-[0.98] border border-neutral-700 hover:bg-neutral-800"
                >
                  Share with your friends
                </button>
              ) : (
                <div className="flex flex-col items-center space-y-4">
                  <p className="text-lg text-neutral-400">Share this link</p>
                  <div className="flex items-center w-full bg-neutral-800 rounded-2xl p-2 border border-neutral-700">
                    <input
                      type="text"
                      readOnly
                      value={shareableLink}
                      className="flex-grow bg-transparent text-white text-sm outline-none px-2"
                    />
                    <button
                      onClick={handleCopyLink}
                      className="bg-white text-black rounded-xl px-3 py-1.5 text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserWaitlistModal;