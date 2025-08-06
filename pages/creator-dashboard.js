import SalesTransactions from "@/components/sections/SalesTransactions";
import SidebarDashboard from "@/components/sections/SidebarDashboard.js";
import { useState } from "react";

const CreatorDashboard = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('overview');

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
    };

    const renderContent = () => {
        switch (activeItem) {
            case 'overview':
                return ;
            case 'sales':
                return <SalesTransactions />;
            case 'upload':
                return (
                    <div className="flex-1 p-4 md:p-10 bg-neutral-900 flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-neutral-100 mb-4 mt-16 md:mt-0">Upload Asset</h1>
                            <p className="text-neutral-400">Upload Asset component will go here</p>
                        </div>
                    </div>
                );
            case 'assets':
                return (
                    <div className="flex-1 p-4 md:p-10 bg-neutral-900 flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-neutral-100 mb-4 mt-16 md:mt-0">Assets</h1>
                            <p className="text-neutral-400">Assets management component will go here</p>
                        </div>
                    </div>
                );
            case 'settings':
                return (
                    <div className="flex-1 p-4 md:p-10 bg-neutral-900 flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-neutral-100 mb-4 mt-16 md:mt-0">Profile Settings</h1>
                            <p className="text-neutral-400">Profile settings component will go here</p>
                        </div>
                    </div>
                );
            default:
                return <CreatorDashboardHome />;
        }
    };

    return (
        <div className="bg-neutral-900 text-neutral-100 flex min-h-screen relative">
            <SidebarDashboard
                activeItem={activeItem}
                onItemClick={handleItemClick}
                collapsed={sidebarCollapsed}
                onToggleCollapsed={toggleSidebar}
                mobileMenuOpen={mobileMenuOpen}
                onToggleMobileMenu={toggleMobileMenu}
            />
            {renderContent()}
        </div>
    );
};

export default CreatorDashboard;