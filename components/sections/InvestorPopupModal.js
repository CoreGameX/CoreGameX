import { X, ChevronDown, Check } from "lucide-react";
import { useEffect, useState } from "react";
// Import getApps along with initializeApp
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from "firebase/auth";

// --- Firebase Configuration and Initialization ---
// The following global variables are provided by the canvas environment.
// We check for their existence and provide fallbacks for local development.
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');

// Initialize Firebase App only if no apps are already initialized.
// This prevents the "duplicate-app" error in environments with hot-reloading.
const firebaseApps = getApps();
let app;
if (!firebaseApps.length) {
  app = initializeApp(firebaseConfig);
} else {
  app = firebaseApps[0];
}
const db = getFirestore(app);
const auth = getAuth(app);

// Custom Dropdown Component (unchanged)
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
        className="w-full h-auto p-3 !rounded-2xl bg-neutral-800 border border-neutral-700 text-left flex items-center justify-between hover:border-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
      >
        <span className={value ? "text-white" : "text-neutral-400"}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`text-neutral-200 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-neutral-800 border border-neutral-700 rounded-2xl  shadow-lg z-10 max-h-80 overflow-y-auto scrollbar-hide">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className="w-full h-auto px-3 text-left text-neutral-200 rounded-none hover:bg-neutral-700 transition-colors flex items-center justify-between"
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

// --- Main Investor Popup Modal Component ---
const InvestorPopupModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    social: "",
    investmentProfile: "", // New required field
    location: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // idle, submitting, success, error
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  // Define dropdown options
  const investmentProfileOptions = [
    "Angel Investor",
    "Micro VC",
    "Seed Stage",
    "Series A",
    "Growth Stage",
    "Late Stage",
    "Strategic Investor",
    "Family Office"
  ];

  const locationOptions = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Sweden",
    "India",
    "Singapore",
    "Japan",
    "Australia",
    "Israel",
    "Other"
  ];

  // --- Auth State Listener and Sign-In ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        try {
          if (initialAuthToken) {
            await signInWithCustomToken(auth, initialAuthToken);
          } else {
            await signInAnonymously(auth);
          }
        } catch (error) {
          console.error("Firebase sign-in error:", error);
        }
      }
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  // Effect to manage body overflow when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear the error for the field being updated
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  // -----------------------------------------------------------------------------------------------------
  // --- NEW: Business Email Validation Logic ---
  // -----------------------------------------------------------------------------------------------------
  // List of common personal email domains to reject.
  const personalEmailDomains = [
    "gmail.com", "yahoo.com", "hotmail.com", "aol.com", "outlook.com", 
    "icloud.com", "protonmail.com", "zoho.com", "yandex.com"
  ];

  const isBusinessEmail = (email) => {
    if (!email) return false;
    const domain = email.split('@')[1]?.toLowerCase();
    // Check if the domain exists and is not in the list of personal domains.
    return domain && !personalEmailDomains.includes(domain);
  };

  const isValidEmailFormat = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  // -----------------------------------------------------------------------------------------------------

  // Function to check if the email already exists in Firestore
  const isEmailUnique = async (email) => {
    if (!isAuthReady) {
      console.error("isEmailUnique: Auth is not ready.");
      return false; // Prevent Firestore calls before auth is ready
    }
    const q = query(collection(db, `artifacts/${appId}/public/data/investors`), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
  };

  // Validate all form fields
  const validateForm = async () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!isValidEmailFormat(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    } else if (!isBusinessEmail(formData.email)) {
      // --- NEW: Check if the email is a business email. ---
      newErrors.email = "Please use a business email address.";
    } else if (!await isEmailUnique(formData.email)) {
      newErrors.email = "This email is already registered.";
    }
    if (!formData.social.trim()) {
      newErrors.social = "LinkedIn or X Profile is required.";
    }
    if (!formData.investmentProfile) {
      newErrors.investmentProfile = "Investment Profile is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {
    console.log("Attempting to submit form data...");
    setSubmissionStatus("submitting");

    // Only proceed if auth state is ready
    if (!userId) {
      setErrors({ form: "Authentication not ready. Please try again." });
      setSubmissionStatus("error");
      console.error("Form submission failed: User not authenticated.");
      return;
    }

    const formIsValid = await validateForm();
    if (!formIsValid) {
      setSubmissionStatus("error");
      console.error("Form submission failed: Validation errors.");
      return;
    }

    try {
      // Save data to Firestore in the public collection
      await addDoc(collection(db, `artifacts/${appId}/public/data/investors`), {
        ...formData,
        submittedAt: new Date(),
      });
      setSubmissionStatus("success");
      console.log("Form submission successful.");
      
      // Clear form data on success
      setFormData({
        fullName: "",
        email: "",
        social: "",
        investmentProfile: "",
        location: "",
        message: ""
      });

      // You might want to close the modal after a brief delay on success
      setTimeout(() => {
        onClose();
        setSubmissionStatus("idle");
      }, 2000);

    } catch (e) {
      console.error("Error adding document: ", e);
      setSubmissionStatus("error");
      setErrors({ form: "Failed to submit form. Please try again." });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="bg-neutral-900 text-white p-8 rounded-2xl w-full max-w-screen-lg relative shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Join Our Investor Network</h2>
          <p className="text-neutral-300 text-lg">Connect with us to explore investment opportunities and stay updated on our latest ventures.</p>
        </div>

        <div className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-lg font-medium mb-2 text-neutral-200">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="e.g. John Smith"
              className={`w-full p-3 rounded !bg-neutral-800 border ${errors.fullName ? "border-red-500" : "border-neutral-700"} focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all placeholder-neutral-500`}
            />
            {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-lg font-medium mb-2 text-neutral-200">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="john@venture-capital.com"
              className={`w-full p-3 rounded !bg-neutral-800 border ${errors.email ? "border-red-500" : "border-neutral-700"} focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all placeholder-neutral-500`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* LinkedIn / Twitter */}
          <div>
            <label className="block text-lg font-medium mb-2 text-neutral-200">
              LinkedIn or X Profile <span className="text-red-400">*</span>
            </label>
            <input
              type="url"
              required
              value={formData.social}
              onChange={(e) => handleInputChange("social", e.target.value)}
              placeholder="https://linkedin.com/in/johnsmith or https://x.com/johnsmith"
              className={`w-full p-3 rounded !bg-neutral-800 border ${errors.social ? "border-red-500" : "border-neutral-700"} focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all placeholder-neutral-500`}
            />
            {errors.social && <p className="text-red-400 text-sm mt-1">{errors.social}</p>}
          </div>

          {/* Investment Profile */}
          <div>
            <label className="block text-lg font-medium mb-2 text-neutral-200">
              Investment Profile <span className="text-red-400">*</span>
            </label>
            <CustomDropdown
              options={investmentProfileOptions}
              placeholder="Select your typical investment range"
              value={formData.investmentProfile}
              onChange={(value) => handleInputChange("investmentProfile", value)}
            />
            {errors.investmentProfile && <p className="text-red-400 text-sm mt-1">{errors.investmentProfile}</p>}
          </div>

          {/* Location */}
          <div>
            <label className="block text-lg font-medium mb-2 text-neutral-200">
              Location
            </label>
            <CustomDropdown
              options={locationOptions}
              placeholder="Select your primary location"
              value={formData.location}
              onChange={(value) => handleInputChange("location", value)}
            />
          </div>

          {/* Investment Focus & Interest */}
          <div>
            <label className="block text-lg font-medium mb-2 text-neutral-200">
              Investment Focus & Interest
            </label>
            <textarea
              rows="4"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your investment thesis, sectors of interest, or why you'd like to connect with us. (Optional)"
              className="w-full p-3 rounded-2xl bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all placeholder-neutral-500 resize-none"
            />
          </div>

          {/* Privacy Notice */}
          <div>
            <p className="text-lg text-neutral-400 ">By submitting this form, you agree to be contacted regarding investment opportunities. We respect your privacy and will not share your information with third parties.</p>
          </div>

          {/* Submission Feedback & Button */}
          {errors.form && <p className="text-red-300 text-xl text-center">{errors.form}</p>}
          {submissionStatus === "success" && <p className="text-white text-xl text-center">Submission successful!</p>}
          
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submissionStatus === "submitting"}
            className={`w-full bg-gradient-to-r from-neutral-200 to-gray-300 text-neutral-800 font-semibold py-3 px-6 rounded-2xl transition-all duration-100 shadow-lg
              ${submissionStatus === "submitting" 
                ? "opacity-50 cursor-not-allowed" 
                : "hover:from-neutral-300 hover:to-gray-400 transform active:scale-[0.98]"
              }`
            }
          >
            {submissionStatus === "submitting" ? "Submitting..." : "Submit Investment Interest"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestorPopupModal;