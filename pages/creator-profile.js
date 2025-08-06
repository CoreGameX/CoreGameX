import Layout from '@/components/layout/Layout'
import CreatorProfileHeader from '@/components/sections/CreatorProfileHeader'
import CreatorProductCards from '@/components/sections/CreatorProductCards';
import SubNavigation from '@/components/sections/SubNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUserDataToStore } from '@/components/store/profileDataSlice';


export default function CreatorProfile() {

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
    { id: 'Assets', label: 'Assets' },
    { id: 'CollectionPack', label: 'Collection Pack' },
    { id: 'MostDownload', label: 'Most Download' },
    { id: 'About', label: 'About' },
    { id: 'Review', label: 'Review' }
  ];



  return (
    <Layout headerStyle={2} footerStyle={1} pageCls="creator-profile-page ">
      <div className="min-h-screen bg-black text-white pt-10">
        <CreatorProfileHeader userData={userData}/>
        {/* <SubNavigation tabs={tabs} defaultTab={tabs[0].id} /> */}
        <CreatorProductCards />

      </div>
    </Layout>
  );
}