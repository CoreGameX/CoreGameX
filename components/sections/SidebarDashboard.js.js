// components/SidebarDashboard.js
import {
  Home,
  FolderOpen,
  Settings,
  PiggyBank,
  Plus,
  FileText,
  Library,
  Heart,
  History,
  BarChart3,
  RefreshCw,
  List,
  TrendingUp,
  Shield,
  HelpCircle,
  MessageSquare,
  Notebook,
  Bell,
  Bookmark
} from 'lucide-react';
import { FaExchangeAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem, toggleUserTypeAndSetActiveItem } from '../store/dashboardSlice';
import { useEffect } from 'react';
import { setUserDataToStore } from '../store/profileDataSlice';

const SidebarDashboard = ({ mobileMenuOpen, onToggleMobileMenu }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const saved = localStorage.getItem('profileData');
    if (saved) {
      dispatch(setUserDataToStore(JSON.parse(saved)));
    }
  }, []);
  const activeItem = useSelector((state) => state.dashboard.activeItem);
  const userData = useSelector((state) => state.profileData.userData);
  const userType = userData.userType || 'user';

  const menuItems = [
    { id: 'profile-setting', icon: Settings, label: 'Profile & Settings' },
    { id: 'transaction-history', icon: History, label: 'Transaction History' },
    { id: 'licence-management', icon: Notebook, label: 'License Management' },
    { id: 'notification', icon: Bell, label: 'Notifications' },
    { id: 'help-support', icon: HelpCircle, label: 'Help & Support' },
  ];

  const userNavItems = [
    { id: 'my-assets', icon: FolderOpen, label: 'My Assets' },
    { id: 'license-terms', icon: FileText, label: 'View License Terms' },
    { id: 'resell-assets', icon: FaExchangeAlt, label: 'Resell Assets' },
    { id: 'my-library', icon: Library, label: 'My Library' },
    { id: 'wishlist', icon: Bookmark, label: 'Wishlist' },
    { id: 'favorite', icon: Heart, label: 'Favorite' },
    { id: 'order-history', icon: History, label: 'Order History' },
    { id: 'resale-analytics', icon: BarChart3, label: 'Resale Analytics' },
    { id: 'conversion-request', icon: RefreshCw, label: 'Conversion Request' },
  ];

  const creatorNavItems = [
    { id: 'analytics', icon: TrendingUp, label: 'Analytics' },
    { id: 'earnings-dashboard', icon: PiggyBank, label: 'Earnings Dashboard' },
    { id: 'manage-listings', icon: List, label: 'Manage Listings' },
    { id: 'royalty-settings', icon: Settings, label: 'Royalty Settings' },
    { id: 'asset-verification', icon: Shield, label: 'Request for Asset Verification' },
    { id: 'manage-requests', icon: HelpCircle, label: 'Manage Requests - Refund/Issue' },
    { id: 'feedback', icon: MessageSquare, label: 'Feedback' },
  ];

  const onItemClick = (itemId) => {
    dispatch(setActiveItem(itemId));
  };

  const handleToggleUserType = () => {
    dispatch(toggleUserTypeAndSetActiveItem());
  };

  const navItems = userType === 'user' ? userNavItems : creatorNavItems;

  return (
    <>
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 animate-[slideIn_0.3s_ease-out_forwards]"
          onClick={onToggleMobileMenu}
        ></div>
      )}

      {/* Desktop Sidebar */}
      <div className="fixed hidden lg:flex py-2 bg-black/95 backdrop-blur-lg min-h-screen w-96 flex-col h-screen transition-transform duration-300">
        <div className="flex flex-col flex-1 h-screen justify-between">
          <div>
            {userType === "creator" && (
              <div className="px-6 py-4 flex-shrink-0">
                <div className="bg-white text-black rounded-2xl py-3 px-4 flex items-center justify-center font-semibold text-lg hover:shadow-md hover:shadow-white/20 cursor-pointer">
                  <Plus size={20} className="mr-2" />
                  Create
                </div>
              </div>
            )}

            <div className="h-[1px] w-full bg-neutral-800 mb-4"></div>

            <div className={`overflow-y-auto pr-1 ${userType === 'creator' ? 'max-h-[60vh]' : 'max-h-[70vh]'} scrollbar-hide`}>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => onItemClick(item.id)}
                    className="cursor-pointer mb-2 px-4"
                    title={item.label}
                  >
                    <div className={`p-[1px] rounded-2xl`}>
                      <div className={`flex items-center px-4 py-3 rounded-2xl text-lg font-semibold transition-all duration-300 ${isActive
                          ? 'text-white bg-neutral-900 hover:bg-neutral-800 '
                          : 'text-neutral-300 hover:text-white bg-black hover:bg-neutral-900 '
                        }`}>
                        <Icon size={22} className="mr-4" />
                        {item.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Toggle User Type Button */}
          <div className="bg-black py-4 px-6 border-t border-neutral-800 mb-36">
            <div
              onClick={handleToggleUserType}
              className="bg-white text-black rounded-2xl py-3 px-4 flex items-center justify-center font-semibold text-lg hover:shadow-md hover:shadow-white/20 cursor-pointer"
            >
              {userType === 'user' ? 'Become Creator' : 'Switch to User'}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden bg-black/90 py-2 backdrop-blur-lg min-h-screen w-[250px] flex flex-col fixed h-full left-0 z-40 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-[1px] w-full bg-neutral-800 mb-4"></div>

        <div className="flex flex-col flex-1 min-h-0">
          <div>
            {userType === "creator" && (
              <div className="px-6 py-4 flex-shrink-0">
                <div className="bg-white text-black rounded-2xl py-3 px-4 flex items-center justify-center font-semibold text-lg hover:shadow-md hover:shadow-white/20 cursor-pointer">
                  <Plus size={16} className="mr-2" />
                  Create
                </div>
              </div>
            )}

            <div className={`overflow-y-auto pr-1 ${userType === 'creator' ? 'max-h-[60vh]' : 'max-h-[70vh]'} scrollbar-hide`}>
              {[...navItems, ...menuItems].map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      onItemClick(item.id);
                      onToggleMobileMenu();
                    }}
                    className="cursor-pointer mb-2 mx-4"
                  >
                    <div className="p-[1px] rounded-2xl">
                      <div className={`flex items-center px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${isActive
                          ? 'text-white bg-neutral-900'
                          : 'text-neutral-300 hover:text-white bg-black '
                        }`}>
                        <Icon size={20} className="mr-3" />
                        <span className="truncate">{item.label}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-black py-4 px-6 border-t border-neutral-800 mb-28">
            <div
              onClick={handleToggleUserType}
              className="bg-white text-black rounded-2xl py-3 px-4 flex items-center justify-center font-semibold text-lg hover:shadow-md hover:shadow-white/20 cursor-pointer"
            >
              {userType === 'user' ? 'Become Creator' : 'Switch to User'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarDashboard;
