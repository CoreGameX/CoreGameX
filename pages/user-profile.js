import Layout from '@/components/layout/Layout'

import SubNavigation from '@/components/sections/SubNavigation';
import UserProfileHeader from '@/components/sections/UserProfileHeader';
import UserProductCards from '@/components/sections/UserProductCards';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUserDataToStore } from '@/components/store/profileDataSlice';


export default function UserProfile() {

  const dispatch = useDispatch()
  useEffect(() => {
    const saved = localStorage.getItem('profileData');
    if (saved) {
      dispatch(setUserDataToStore(JSON.parse(saved)));
    }
  }, []);

  const userData = useSelector((state) =>
    state.profileData.userData
  );

  const tabs = [
    { id: 'Purchased', label: 'Purchased' },
    { id: 'Liked', label: 'Liked' },
    { id: 'Follow ', label: 'Follow' },
    { id: 'Waitlisted', label: 'Waitlisted' },
  ];

  return (
    <Layout headerStyle={2} footerStyle={1} pageCls="creator-profile-page ">
      <div className="min-h-screen bg-black text-white pt-10">
        <UserProfileHeader userData={userData} />
        {/* <SubNavigation tabs={tabs} defaultTab={tabs[0].id} /> */}
        <UserProductCards />

      </div>
    </Layout>
  );
}