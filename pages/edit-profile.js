import { setUserDataToStore } from '@/components/store/profileDataSlice';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Upload, X, Eye, ChevronDown } from 'lucide-react';

export default function EditProfile() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [showImageModal, setShowImageModal] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('profileData');
        if (saved) {
            dispatch(setUserDataToStore(JSON.parse(saved)));
        }
    }, []);

    const userData = useSelector((state) => state.profileData.userData);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
        userType: '',
        profileImage: '',
        shortIntro: '',
        socialLinks: {
            twitter: '',
            instagram: '',
            youtube: '',
            linkedin: ''
        },
        achievements: '',
        experience: '',
    });

    // Load user data when component mounts
    useEffect(() => {
        if (userData) {
            setFormData(userData);
        }
    }, [userData]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.startsWith('socialLinks.')) {
            const socialField = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                socialLinks: {
                    ...prev.socialLinks,
                    [socialField]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setFormData(prev => ({
                    ...prev,
                    profileImage: event.target.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Update Redux store
        dispatch(setUserDataToStore(formData));

        // Save to localStorage
        localStorage.setItem('profileData', JSON.stringify(formData));

        alert('Profile updated successfully!');

        // Navigate based on user type
        if (formData.userType === 'creator') {
            router.push('/creator-profile');
        } else {
            router.push('/user-profile');
        }
    };

    const handleCancel = () => {
        router.back();
    };

    const ImageModal = () => (
        showImageModal && (
            <div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                onClick={() => setShowImageModal(false)}
            >
                <div className="relative max-w-4xl max-h-full">
                    <button
                        onClick={() => setShowImageModal(false)}
                        className="absolute -top-16 -right-16 text-white hover:text-neutral-300 transition-colors"
                    >
                        <X className="w-10 h-10" />
                    </button>
                    <img
                        src={formData.profileImage}
                        alt="Profile preview"
                        className="max-w-full max-h-screen object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            </div>
        )
    );

    return (
        <div className="min-h-screen bg-neutral-950 py-4 px-4 sm:py-8">
            <div className="max-w-screen-lg mx-auto">
                <div className="rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 bg-neutral-900  m-16">
                    <h1 className="text-3xl sm:text-5xl font-bold text-white mb-8 text-center">Edit Profile</h1>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Basic Information */}
                        <div className="space-y-6">
                            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 border-b border-neutral-700 pb-3">Basic Information</h2>

                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label className="block text-lg font-medium text-neutral-200 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder={userData?.name || "Enter your name"}
                                        className="w-full px-4 py-3 !bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-400 text-neutral-100 placeholder-neutral-400 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-neutral-200 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder={userData?.email || "Enter your email"}
                                        className="w-full px-4 py-3 !bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-400 text-neutral-100 placeholder-neutral-400 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Profile Image Section */}
                            <div>
                                <label className="block text-lg font-medium text-neutral-200 mb-4">
                                    Profile Image
                                </label>

                                {/* Image Preview with Full View Option */}
                                {formData.profileImage && (
                                    <div className="mb-6 flex flex-col items-center">
                                        <div className="relative group">
                                            <img
                                                src={formData.profileImage}
                                                alt="Profile preview"
                                                className="w-32 h-32 rounded-full object-cover border-4 border-neutral-700 cursor-pointer transition-transform hover:scale-105"
                                                onClick={() => setShowImageModal(true)}
                                            />
                                            <div
                                                className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                                onClick={() => setShowImageModal(true)}
                                            >
                                                <Eye className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                        <p className="text-neutral-400 text-sm mt-2">Click to view full size</p>
                                    </div>
                                )}

                                {/* Upload Section */}
                                <div className="mb-4">
                                    <label className="flex items-center justify-center w-full px-6 py-8 bg-neutral-800 border-2 border-dashed border-neutral-700 rounded-xl cursor-pointer hover:bg-neutral-700 hover:border-neutral-500 transition-all">
                                        <div className="text-center">
                                            <Upload className="mx-auto h-10 w-10 text-neutral-400 mb-3" />
                                            <span className="text-lg text-neutral-300 font-medium">Click to upload image</span>
                                            <p className="text-sm text-neutral-500 mt-2">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-neutral-200 mb-2">
                                    Short Introduction
                                </label>
                                <textarea
                                    name="shortIntro"
                                    value={formData.shortIntro}
                                    onChange={handleInputChange}
                                    placeholder={userData?.shortIntro || "Tell us about yourself..."}
                                    rows="4"
                                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-400 text-neutral-100 placeholder-neutral-400 resize-none transition-colors"
                                />
                            </div>
                        </div>

                        {/* Password Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 border-b border-neutral-700 pb-3">Change Password</h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-lg font-medium text-neutral-200 mb-2">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter new password"
                                        className="w-full px-4 py-3 !bg-neutral-800 border border-neutral-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-400 text-neutral-100 placeholder-neutral-400 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-neutral-200 mb-2">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Confirm new password"
                                        className="w-full px-4 py-3 !bg-neutral-800 border border-neutral-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-400 text-neutral-100 placeholder-neutral-400 transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-6">
                            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 border-b border-neutral-700 pb-3">Social Links</h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-lg font-medium text-neutral-200 mb-2">
                                        Twitter
                                    </label>
                                    <input
                                        type="text"
                                        name="socialLinks.twitter"
                                        value={formData?.socialLinks?.twitter||''}
                                        onChange={handleInputChange}
                                        placeholder={userData?.socialLinks?.twitter || "Twitter profile URL"}
                                        className="w-full px-4 py-3 !bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-400 text-neutral-100 placeholder-neutral-400 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-neutral-200 mb-2">
                                        Instagram
                                    </label>
                                    <input
                                        type="text"
                                        name="socialLinks.instagram"
                                        value={formData?.socialLinks?.instagram||''}
                                        onChange={handleInputChange}
                                        placeholder={userData?.socialLinks?.instagram || "Instagram profile URL"}
                                        className="w-full px-4 py-3 !bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-400 text-neutral-100 placeholder-neutral-400 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-neutral-200 mb-2">
                                        YouTube
                                    </label>
                                    <input
                                        type="text"
                                        name="socialLinks.youtube"
                                        value={formData?.socialLinks?.youtube||''}
                                        onChange={handleInputChange}
                                        placeholder={userData?.socialLinks?.youtube || "YouTube channel URL"}
                                        className="w-full px-4 py-3 !bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-400 text-neutral-100 placeholder-neutral-400 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-neutral-200 mb-2">
                                        LinkedIn
                                    </label>
                                    <input
                                        type="text"
                                        name="socialLinks.linkedin"
                                        value={formData?.socialLinks?.linkedin||''}
                                        onChange={handleInputChange}
                                        placeholder={userData?.socialLinks?.linkedin || "LinkedIn profile URL"}
                                        className="w-full px-4 py-3 !bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-400 text-neutral-100 placeholder-neutral-400 transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Creator-only fields */}
                        {formData.userType === 'creator' && (
                            <div className="space-y-6">
                                <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 border-b border-neutral-700 pb-3">Creator Information</h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-lg font-medium text-neutral-200 mb-2">
                                            Achievements
                                        </label>
                                        <textarea
                                            name="achievements"
                                            value={formData.achievements}
                                            onChange={handleInputChange}
                                            placeholder={userData?.achievements || "List your achievements..."}
                                            rows="5"
                                            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-400 text-neutral-100 placeholder-neutral-400 resize-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-lg font-medium text-neutral-200 mb-2">
                                            Experience
                                        </label>
                                        <textarea
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleInputChange}
                                            placeholder={userData?.experience || "Describe your experience..."}
                                            rows="5"
                                            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-400 text-neutral-100 placeholder-neutral-400 resize-none transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8">
                            <button
                                type="submit"
                                className="flex-1 bg-neutral-100 text-neutral-900 py-3 px-8 rounded-xl hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-all duration-200 font-semibold text-lg"
                            >
                                Update Profile
                            </button>
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="flex-1 bg-neutral-800 text-neutral-100 py-3 px-8 rounded-xl hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-all duration-200 font-semibold text-lg border border-neutral-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Image Modal */}
            <ImageModal />
        </div>
    );
}