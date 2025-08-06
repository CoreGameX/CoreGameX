import ProfileNav from "@/components/layout/ProfileNav";
import Analytics from "@/components/sections/Analytics";
import MyAssets from "@/components/sections/MyAssets";
import SalesTransactions from "@/components/sections/SalesTransactions";
import SidebarDashboard from "@/components/sections/SidebarDashboard.js";
import { setUserDataToStore } from "@/components/store/profileDataSlice";
import { setActiveItem } from "@/components/store/dashboardSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Profile = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter()

    const dispatch = useDispatch();

    useEffect(() => {
        const saved = localStorage.getItem("profileData");
        if (!saved) {
            router.push("/login");
            return;
        }

        const parsed = JSON.parse(saved);
        if (!parsed.userType || parsed.userType.trim() === "") {
            router.push("/login");
            return;
        }

        dispatch(setUserDataToStore(parsed));
        const initialItem = parsed.userType === "creator" ? "analytics" : "my-assets";
        dispatch(setActiveItem(initialItem));
    }, []);


    const activeItem = useSelector((state) => state.dashboard.activeItem);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const renderPage = (title, description) => (
        <div className="flex-1 p-4 md:p-10 bg-neutral-950 scroll-smooth">
            <div className="text-center flex items-center justify-center flex-col lg:ml-96 min-h-[200vh] scroll-smooth scrollbar-hide">
                <h1 className="text-3xl font-bold text-neutral-100 mb-4 mt-16 md:mt-0">
                    {title}
                </h1>
                <p className="text-neutral-400">{description}</p>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeItem) {
            // User Nav Items
            case "my-assets":
                return <MyAssets />;
            case "license-terms":
                return renderPage("License Terms", "License Terms content will go here");
            case "resell-assets":
                return renderPage("Resell Assets", "Resell Assets component will go here");
            case "my-library":
                return renderPage("My Library", "Your asset library will be shown here");
            case "wishlist":
                return renderPage("Wishlist", "Items in your wishlist will appear here");
            case "favorite":
                return renderPage("Favorite", "Your favorite items will be listed here");
            case "order-history":
                return renderPage("Order History", "Details of your past orders will appear here");
            case "resale-analytics":
                return renderPage("Resale Analytics", "Analytics data for your resales will be shown");
            case "conversion-request":
                return renderPage("Conversion Requests", "Manage your conversion requests here");

            // Creator Nav Items
            case "manage-listings":
                return renderPage("Manage Listings", "Manage your uploaded assets and listings");
            case "earnings-dashboard":
                return <SalesTransactions />;
            case "analytics":
                return <Analytics />;
            case "royalty-settings":
                return renderPage("Royalty Settings", "Set and adjust your royalty preferences");
            case "asset-verification":
                return renderPage("Asset Verification", "Request verification for your assets");
            case "manage-requests":
                return renderPage("Manage Requests", "Refund and issue request management");
            case "feedback":
                return renderPage("Feedback", "Submit or view platform-related feedback");

            default:
                return renderPage("Dashboard", "Please select a section from the sidebar");
        }
    };

    return (
        <div className="bg-neutral-900 text-neutral-100 min-h-screen flex flex-col scroll-smooth">
            <ProfileNav onToggleMobileMenu={toggleMobileMenu} />

            <div className="flex relative top-24 lg:top-32 scrollbar-hide">
                <SidebarDashboard
                    mobileMenuOpen={mobileMenuOpen}
                    onToggleMobileMenu={toggleMobileMenu}
                />
                {renderContent()}
            </div>
        </div>
    );
};

export default Profile;
