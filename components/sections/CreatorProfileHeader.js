import React, { useState } from 'react';
import {
  Check,
  Share2,
  MoreHorizontal,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Copy,
  CheckCheck,
  Verified,
  Eye,
  X,
} from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function ProfileHeader({ userData }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);


  const { name, profileImage, shortIntro, socialLinks } = userData;
  const { instagram, linkedin, twitter, youtube } = socialLinks || {};

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
            src={profileImage}
            alt="Profile preview"
            className="min-w-[350px] max-w-full max-h-screen object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )
  );


  return (
    <div className="mt-16 w-full px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-screen-lg mx-auto relative">
        <div className="bg-neutral-900 rounded-[20px] shadow-lg overflow-hidden ">
          <div className="p-6 sm:p-8 ">
            <div className="flex flex-col sm:flex-row items-start lg:items-center gap-6 lg:gap-8 ">

              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-42 sm:w-60 aspect-square rounded-[16px] overflow-hidden bg-gradient-to-br from-neutral-600 to-neutral-700 shadow-lg">
                  <img
                    src={profileImage || 'https://tse4.mm.bing.net/th/id/OIP.tX36supoUyT_GOZtBHrQJgHaHa?pid=Api&P=0&h=180'}
                    alt="Dony Herrera"
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setShowImageModal(true)}
                  />
                  
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-4xl font-bold text-white truncate">
                    {name || 'Creator Name'}
                  </h1>
                  <div className="text-blue-500">
                    <Verified size={20} />
                  </div>
                </div>

                <p className="text-neutral-300 text-base sm:text-lg mb-6 leading-relaxed max-w-2xl">
                  {shortIntro || 'This is a short intro about the creator.'}
                </p>

                <div className="flex items-center gap-4">
                  <a href={youtube} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white p-2 hover:bg-neutral-700 rounded-lg transition">
                    <FaYoutube size={22} />
                  </a>
                  <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white p-2 hover:bg-neutral-700 rounded-lg transition">
                    <FaTwitter size={22} />
                  </a>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white p-2 hover:bg-neutral-700 rounded-lg transition">
                    <FaLinkedin size={22} />
                  </a>
                  <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white p-2 hover:bg-neutral-700 rounded-lg transition">
                    <FaInstagram size={22} />
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 w-full sm:w-auto sm:flex-shrink-0">
                <button className="flex-1 sm:flex-initial text-black bg-white hover:bg-neutral-200 text-base font-semibold px-8 py-1 rounded-xl transition duration-200 shadow-lg hover:shadow-xl">
                  Follow
                </button>
                <button className="text-white hover:text-black px-3 py-1 bg-neutral-600 hover:bg-neutral-500 rounded-xl transition duration-200">
                  <Share2 size={20} />
                </button>
                <div className="">
                  <button
                    className="text-white hover:text-black px-3 py-1 bg-neutral-600 hover:bg-neutral-500 rounded-xl transition duration-200"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <MoreHorizontal size={20} />
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-neutral-200 py-2 z-20">
                      <div className="w-full text-left px-4 py-2 text-base text-neutral-700 hover:bg-neutral-100 transition">
                        Report Profile
                      </div>

                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-20" />

        {/* Click outside to close dropdown */}
        {showDropdown && (
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowDropdown(false)}
          />
        )}
      </div>
      {/* Image Modal */}
      <ImageModal />
    </div>
  );
}
