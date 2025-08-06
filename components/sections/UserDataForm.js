import { ChevronLeft, ChevronRight, Eye, Upload, X } from "lucide-react";
import { useState } from "react";

const ProfileFields = ({ userData, updateUserData }) => {
    const [showImageModal, setShowImageModal] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                updateUserData("profileImage", event.target.result);
            };
            reader.readAsDataURL(file);
        }
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
                        src={userData.profileImage}
                        alt="Profile preview"
                        className="max-w-full max-h-screen object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            </div>
        )
    );

    return (
        <div className="space-y-6 text-lg">
            <div>
                {userData.profileImage && (
                    <div className="mb-6 flex flex-col items-center">
                        <div className="relative group">
                            <img
                                src={userData.profileImage}
                                alt="Profile preview"
                                className="w-32 h-32 rounded-full object-cover border-4 border-neutral-600 cursor-pointer transition-transform hover:scale-105"
                                onClick={() => setShowImageModal(true)}
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                onClick={() => setShowImageModal(true)}
                            >
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <p className="text-neutral-400 text-base mt-2">Click to view full size</p>
                    </div>
                )}

                <label className="block text-white text-lg font-medium mb-3">Set Profile Image or Enter URL</label>
                <div className="mb-4">
                    <label className="flex items-center justify-center w-full px-4 py-6 bg-neutral-700 border-2 border-dashed border-neutral-600 rounded-lg cursor-pointer hover:bg-neutral-600 hover:border-neutral-500 transition-colors">
                        <div className="text-center">
                            <Upload className="mx-auto h-8 w-8 text-neutral-400 mb-2" />
                            <span className="text-lg text-neutral-300">Click to upload image</span>
                            <p className="text-sm text-neutral-500 mt-1">PNG, JPG, GIF up to 10MB</p>
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
                <label className="block text-white text-lg font-medium mb-2">Short Intro</label>
                <input
                    type="text"
                    value={userData.shortIntro || ""}
                    onChange={(e) => updateUserData("shortIntro", e.target.value)}
                    placeholder="A quick intro about yourself"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-400 text-lg focus:border-white focus:outline-none"
                />
            </div>

            <div>
                <label className="block text-white text-lg font-medium mb-3">Social Links</label>
                <div className="grid grid-cols-2 gap-4">
                    {["twitter", "instagram", "youtube", "linkedin"].map((platform) => (
                        <div key={platform}>
                            <input
                                type="url"
                                value={userData.socialLinks?.[platform] || ""}
                                onChange={(e) =>
                                    updateUserData("socialLinks", {
                                        ...userData.socialLinks,
                                        [platform]: e.target.value,
                                    })
                                }
                                placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
                                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-400 text-lg focus:border-white focus:outline-none"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <ImageModal />
        </div>
    );
};

export const PlayerDataForm = ({ userData, updateUserData, updateArrayField, prevStep, handleFinalSubmit }) => (
    <div className="max-w-screen-lg mx-auto bg-neutral-900 min-h-screen p-8 text-lg">
        <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-2">Gamer Profile Setup</h2>
            <p className="text-neutral-400 text-xl">Tell us about your gaming preferences</p>
        </div>

        <div className="bg-neutral-800 rounded-xl p-8 mb-8">
            <ProfileFields userData={userData} updateUserData={updateUserData} />
        </div>

        <div className="space-y-8">
            <div className="flex justify-between pt-6">
                <button
                    onClick={prevStep}
                    className="flex items-center space-x-2 px-6 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white hover:bg-neutral-600 transition-colors text-lg"
                >
                    <ChevronLeft size={18} />
                    <span>Back</span>
                </button>

                <button
                    onClick={handleFinalSubmit}
                    className="flex items-center space-x-2 bg-white text-neutral-900 py-3 px-6 rounded-lg hover:bg-neutral-200 transition-colors font-medium text-lg"
                >
                    <span>Complete Setup</span>
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    </div>
);

export const CreatorDataForm = ({ userData, updateUserData, updateArrayField, prevStep, handleFinalSubmit }) => (
    <div className="max-w-screen-lg mx-auto bg-neutral-900 min-h-screen p-8 text-lg">
        <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-2">Creator Profile Setup</h2>
            <p className="text-neutral-400 text-xl">Let's showcase your creative talents</p>
        </div>

        <div className="bg-neutral-800 rounded-xl p-8 mb-8">
            <ProfileFields userData={userData} updateUserData={updateUserData} />
        </div>

        <div className="space-y-8">
            {/* Experience */}
            <div className="bg-neutral-800 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Experience Level</h3>
                <div className="grid grid-cols-3 gap-3">
                    {['Beginner', 'Intermediate', 'Expert'].map(level => (
                        <button
                            key={level}
                            type="button"
                            onClick={() => updateUserData('experience', level)}
                            className={`p-4 border rounded-lg font-medium text-lg transition-all ${userData.experience === level
                                ? 'bg-white text-neutral-900 border-white'
                                : 'bg-neutral-700 text-white border-neutral-600 hover:border-neutral-500'
                                }`}
                        >
                            {level}
                        </button>
                    ))}
                </div>
            </div>

            {/* Achievements */}
            <div className="bg-neutral-800 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Creative Achievements</h3>
                <div>
                    <label className="block text-white text-lg font-medium mb-2">Share your proudest creative accomplishments</label>
                    <textarea
                        value={userData.achievements || ""}
                        onChange={(e) => updateUserData("achievements", e.target.value)}
                        placeholder="Awards won, featured projects, successful collaborations, recognition received, or any milestone achievements..."
                        className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder:text-neutral-400 text-lg focus:border-white focus:outline-none"
                        rows={4}
                    />
                </div>
            </div>

            <div className="flex justify-between pt-6">
                <button
                    onClick={prevStep}
                    className="flex items-center space-x-2 px-6 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white hover:bg-neutral-600 transition-colors text-lg"
                >
                    <ChevronLeft size={18} />
                    <span>Back</span>
                </button>

                <button
                    onClick={handleFinalSubmit}
                    className="flex items-center space-x-2 bg-white text-neutral-900 py-3 px-6 rounded-lg hover:bg-neutral-200 transition-colors font-medium text-lg"
                >
                    <span>Complete Setup</span>
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    </div>
);
