import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import SignUpForm from '@/components/sections/SignUpForm';
import UserTypeSelection from '@/components/sections/UserTypeSelection';
import { CreatorDataForm, PlayerDataForm } from '@/components/sections/UserDataForm';
import { useDispatch } from 'react-redux';
import { setUserDataToStore } from '../components/store/profileDataSlice';


const SignUpFlow = () => {

  const dispatch = useDispatch()


  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem('profileData');
    return saved
      ? JSON.parse(saved)
      : {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
        userType: '',
        profileImage: 'https://tse4.mm.bing.net/th/id/OIP.tX36supoUyT_GOZtBHrQJgHaHa?pid=Api&P=0&h=180',
        shortIntro: '',
        socialLinks: {
          twitter: '',
          instagram: '',
          youtube: '',
          linkedin: ''
        },
        achievements: '',
        experience: '',
      };
  });

  useEffect(() => {
    dispatch(setUserDataToStore(userData));
  }, []);



  const steps = [
    { id: 1, title: 'Sign Up', description: 'Create your account' },
    { id: 2, title: 'User Type', description: 'Choose your role' },
    { id: 3, title: 'Profile Setup', description: 'Complete your profile' },
    { id: 4, title: 'Success', description: 'Welcome aboard!' }
  ];

  const updateUserData = useCallback((field, value) => {
    setUserData(prev => {
      const updated = { ...prev, [field]: value };
      localStorage.setItem('profileData', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateArrayField = useCallback((field, value) => {
    setUserData(prev => {
      const updated = {
        ...prev,
        [field]: prev[field].includes(value)
          ? prev[field].filter(item => item !== value)
          : [...prev[field], value]
      };
      localStorage.setItem('profileData', JSON.stringify(updated));
      return updated;
    });
  }, []);


  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSignUp = () => {
    if (!userData.name || !userData.email || !userData.password || !userData.confirmPassword) {
      alert('Please fill in all required fields');
      return;
    }
    if (userData.password !== userData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    nextStep();
  };

  const handleUserTypeSelect = (type) => {
    updateUserData('userType', type);
    nextStep();
  };

  const handleFinalSubmit = () => {
    dispatch(setUserDataToStore(userData));
    nextStep();
    setTimeout(() => {
      window.location.href = '/dashboard';
      console.log("data store succesfully")
    }, 2000);
  };


  const ProgressBar = () => (
    <div className="my-16">
      <div className="flex justify-between items-center mb-6">
        {steps.map(step => (
          <div key={step.id} className="flex flex-col items-center flex-1">
            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2 text-xl font-bold transition-all duration-300
              ${currentStep > step.id
                ? 'bg-white text-black border-white'
                : currentStep === step.id
                  ? 'border-white text-white'
                  : 'border-neutral-600 text-neutral-500'}
            `}>
              {currentStep > step.id ? <Check size={16} /> : step.id}
            </div>
            <div className="text-center">
              <div className={`text-xl font-medium ${currentStep >= step.id ? 'text-white' : 'text-neutral-500'}`}>
                {step.title}
              </div>
              <div className={`text-lg ${currentStep >= step.id ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative h-1 bg-neutral-700 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );

  const SuccessStep = () => (
    <div className="max-w-md mx-auto text-center text-white">
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
        <Check size={40} className="text-black" />
      </div>
      <h2 className="text-3xl font-bold mb-4">Welcome aboard!</h2>
      <p className="text-neutral-400 mb-6">
        Your account has been created successfully. You'll be redirected to your dashboard shortly.
      </p>
      <div className="bg-neutral-800 rounded-lg p-4 mb-6 text-left">
        <h3 className="font-semibold mb-2">Account Summary:</h3>
        <div className="text-sm space-y-1">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Role:</strong> {userData.userType?.charAt(0)?.toUpperCase() + userData.userType?.slice(1)}</p>
        </div>
      </div>
      <div className="animate-spin w-6 h-6 border-2 border-neutral-700 border-t-white rounded-full mx-auto"></div>
      <p className="text-sm text-neutral-500 mt-2">Redirecting to dashboard...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-900 py-12 px-4">
      <div className="max-w-screen-md mx-auto text-white">
        <ProgressBar />
        {currentStep === 1 && (
          <SignUpForm
            userData={userData}
            updateUserData={updateUserData}
            handleSignUp={handleSignUp}
          />
        )}
        {currentStep === 2 && (
          <UserTypeSelection
            handleUserTypeSelect={handleUserTypeSelect}
            selectedType={userData.userType}
            prevStep={prevStep}
          />
        )}
        {currentStep === 3 && userData.userType === 'player' && (
          <PlayerDataForm
            userData={userData}
            updateUserData={updateUserData}
            updateArrayField={updateArrayField}
            prevStep={prevStep}
            handleFinalSubmit={handleFinalSubmit}
          />
        )}
        {currentStep === 3 && userData.userType === 'creator' && (
          <CreatorDataForm
            userData={userData}
            updateUserData={updateUserData}
            updateArrayField={updateArrayField}
            prevStep={prevStep}
            handleFinalSubmit={handleFinalSubmit}
          />
        )}
        {currentStep === 4 && <SuccessStep />}
      </div>
    </div>
  );
};

export default SignUpFlow;
