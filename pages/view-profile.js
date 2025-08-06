import Layout from '@/components/layout/Layout';
import UserProfileHeader from '@/components/sections/UserProfileHeader';
import CreatorProfileHeader from '@/components/sections/CreatorProfileHeader';
import UserProductCards from '@/components/sections/UserProductCards';
import CreatorProductCards from '@/components/sections/CreatorProductCards';
// import SubNavigation from '@/components/sections/SubNavigation';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUserDataToStore } from '@/components/store/profileDataSlice';

export default function ViewProfile() {
    const dispatch = useDispatch();

    useEffect(() => {
        const saved = localStorage.getItem('profileData');
        if (saved) {
            dispatch(setUserDataToStore(JSON.parse(saved)));
        }
    }, []);

    const userData = useSelector((state) => state.profileData.userData);
    const userType = userData?.userType || 'user';

    // Optional tabs (uncomment if using SubNavigation)
    // const userTabs = [
    //   { id: 'Purchased', label: 'Purchased' },
    //   { id: 'Liked', label: 'Liked' },
    //   { id: 'Follow', label: 'Follow' },
    //   { id: 'Waitlisted', label: 'Waitlisted' },
    // ];
    // const creatorTabs = [
    //   { id: 'Assets', label: 'Assets' },
    //   { id: 'CollectionPack', label: 'Collection Pack' },
    //   { id: 'MostDownload', label: 'Most Download' },
    //   { id: 'About', label: 'About' },
    //   { id: 'Review', label: 'Review' },
    // ];

    return (
        <Layout headerStyle={2} footerStyle={1} pageCls="creator-profile-page">
            <div className="min-h-screen bg-black text-white pt-10">
                {userType === 'creator' ? (
                    <>
                        <CreatorProfileHeader userData={userData} />
                        {/* <SubNavigation tabs={creatorTabs} defaultTab={creatorTabs[0].id} /> */}
                        <CreatorProductCards />
                    </>
                ) : (
                    <>
                        <UserProfileHeader userData={userData} />
                        {/* <SubNavigation tabs={userTabs} defaultTab={userTabs[0].id} /> */}
                        <UserProductCards />
                    </>
                )}
            </div>
        </Layout>
    );
}
