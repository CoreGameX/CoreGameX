import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Menu, ChevronDown } from 'lucide-react';
import { setUserDataToStore } from '@/components/store/profileDataSlice';

const ProfileNav = ({ onToggleMobileMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const menuItems = [
    { label: 'Transaction History', href: '/profile/transactions' },
    { label: 'License Management', href: '/profile/licenses' },
    { label: 'Notifications', href: '/profile/notifications' },
    { label: 'Help & Support', href: '/support' },
    {
      label: 'Profile & Settings',
      subItems: [
        { label: 'View Profile', href: '/view-profile' },
        { label: 'Edit Profile', href: '/edit-profile' },
        { label: 'Settings', href: '/profile/settings' },
        { label: 'Log Out', action: 'logout' }, // Special case
      ],
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleLogout = () => {
    localStorage.removeItem('profileData');
    dispatch(setUserDataToStore({
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
    }));
    router.push('/');
  };

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/95 backdrop-blur-lg shadow-xl border-b border-neutral-800">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 mt-2">
          <div className="flex items-center justify-between h-24 lg:h-32">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <div className="w-64 lg:w-80 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
                  <img
                    src="/assets/images/logo/coreGameX.png"
                    alt="CoreGameX Logo"
                    className="w-full h-full transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `
                                        <div class='w-full h-full bg-neutral-300 rounded-xl flex items-center justify-center shadow-lg'>
                                        <span class='text-black font-bold text-2xl lg:text-4xl'>CG</span>
                                        </div>
                                        `;
                    }}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12 mr-4">
              {menuItems.map((item, index) => {
                const isDropdown = !!item.subItems;

                return (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => isDropdown && handleMouseEnter(index)}
                    onMouseLeave={isDropdown ? handleMouseLeave : undefined}
                  >
                    <div
                      className="text-neutral-300 hover:text-white font-medium text-xl cursor-pointer flex items-center justify-center gap-1 py-2"
                      onClick={() => isDropdown && handleClick(index)}
                    >
                      <span>{item.label}</span>
                      {isDropdown && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''
                            }`}
                        />
                      )}
                    </div>

                    {/* Dropdown Menu */}
                    {isDropdown && activeDropdown === index && (
                      <div className="absolute top-full -left-2 pt-1 w-60 z-50">
                        <div className="bg-black/95 backdrop-blur-lg border border-neutral-900 rounded-xl shadow-xl">
                          <div className="py-2">
                            {item.subItems.map((subItem, subIndex) =>
                              subItem.action === 'logout' ? (
                                <button
                                  key={subIndex}
                                  onClick={handleLogout}
                                  className="w-full h-auto text-left px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-800/50 cursor-pointer text-lg font-medium transition-all duration-200 !rounded-none"
                                >
                                  {subItem.label}
                                </button>
                              ) : (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  className="block px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-800/50 cursor-pointer text-lg font-medium transition-all duration-200"
                                >
                                  {subItem.label}
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {!isDropdown && item.href && (
                      <Link
                        href={item.href}
                        className="absolute inset-0 w-full h-full"
                      >
                        {/* Empty link wrapper to make non-dropdown items clickable */}
                      </Link>
                    )}
                  </div>
                );
              })}

              <Link href="/">
                <button className="bg-white text-black rounded-2xl h-auto py-4 px-5 flex items-center justify-center gap-2 transition-all duration-300 font-semibold text-lg hover:shadow-md hover:shadow-white/20">
                  Back to Home
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div
              onClick={onToggleMobileMenu}
              className="lg:hidden bg-black text-neutral-300/90 transition-all duration-300 cursor-pointer"
            >
              <Menu size={25} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ProfileNav;
