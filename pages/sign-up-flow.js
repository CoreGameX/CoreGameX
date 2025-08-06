import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Check, User, Palette } from 'lucide-react';
import SignUpForm from '@/components/sections/SignUpForm'
import UserTypeSelection from '@/components/sections/UserTypeSelection';
import { CreatorDataForm, PlayerDataForm } from '@/components/sections/UserDataForm';

const SignUpFlow = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: '',
        gamingExperience: '',
        favoriteGenres: [],
        preferredPlatforms: [],
        playingFrequency: '',
        creatorType: '',
        experience: '',
        portfolio: '',
        specialization: [],
        businessType: '',
        location: '',
        website: ''
    });

    const steps = [
        { id: 1, title: 'Sign Up', description: 'Create your account' },
        { id: 2, title: 'User Type', description: 'Choose your role' },
        { id: 3, title: 'Profile Setup', description: 'Complete your profile' },
        { id: 4, title: 'Success', description: 'Welcome aboard!' }
    ];

    const updateUserData = useCallback((field, value) => {
        setUserData(prev => ({ ...prev, [field]: value }));
    }, []);

    const updateArrayField = useCallback((field, value) => {
        setUserData(prev => ({
            ...prev,
            [field]: prev[field].includes(value)
                ? prev[field].filter(item => item !== value)
                : [...prev[field], value]
        }));
    }, []);

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
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
        nextStep();
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    };

    // Progress Bar Component
    const ProgressBar = () => (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center flex-1">
                        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2 transition-all duration-300 ${currentStep > step.id
                            ? 'bg-black text-white border-black'
                            : currentStep === step.id
                                ? 'border-black text-black bg-white'
                                : 'border-gray-300 text-gray-300 bg-white'
                            }`}>
                            {currentStep > step.id ? <Check size={16} /> : step.id}
                        </div>
                        <div className="text-center">
                            <div className={`text-sm font-medium ${currentStep >= step.id ? 'text-black' : 'text-gray-400'}`}>
                                {step.title}
                            </div>
                            <div className={`text-xs ${currentStep >= step.id ? 'text-gray-600' : 'text-gray-400'}`}>
                                {step.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative">
                <div className="absolute top-0 left-0 h-0.5 bg-gray-300 w-full"></div>
                <div
                    className="absolute top-0 left-0 h-0.5 bg-black transition-all duration-500"
                    style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                ></div>
            </div>
        </div>
    );


    // Step 4: Success Page
    const SuccessStep = () => (
        <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-white" />
            </div>

            <h2 className="text-3xl font-bold text-black mb-4">Welcome aboard!</h2>
            <p className="text-gray-600 mb-6">
                Your account has been created successfully. You'll be redirected to your dashboard shortly.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-black mb-2">Account Summary:</h3>
                <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Role:</strong> {userData.userType?.charAt(0)?.toUpperCase() + userData.userType?.slice(1)}</p>
                </div>
            </div>

            <div className="animate-spin w-6 h-6 border-2 border-gray-300 border-t-black rounded-full mx-auto"></div>
            <p className="text-sm text-gray-500 mt-2">Redirecting to dashboard...</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <ProgressBar />

                <div className="bg-white">
                    {currentStep === 1 && <SignUpForm userData={userData} updateUserData={updateUserData} handleSignUp={handleSignUp} />}
                    {currentStep === 2 && <UserTypeSelection handleUserTypeSelect={handleUserTypeSelect} selectedType={userData.userType} prevStep={prevStep} />}
                    {currentStep === 3 && userData.userType === 'player' && <PlayerDataForm userData={userData} updateUserData={updateUserData} updateArrayField={updateArrayField} prevStep={prevStep} handleFinalSubmit={handleFinalSubmit} />}
                    {currentStep === 3 && userData.userType === 'creator' && <CreatorDataForm userData={userData} updateUserData={updateUserData} updateArrayField={updateArrayField} prevStep={prevStep} handleFinalSubmit={handleFinalSubmit} />}
                    {currentStep === 4 && <SuccessStep />}
                </div>
            </div>
        </div>
    );
};

export default SignUpFlow;