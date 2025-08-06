import Layout from "@/components/layout/Layout"

import Action1 from "@/components/sections/Action1"
import CreateSell1 from "@/components/sections/CreateSell1"
import DiscoverItem1 from "@/components/sections/DiscoverItem1"
import FeaturedItem1 from "@/components/sections/FeaturedItem1"
import FlatTitle1 from "@/components/sections/FlatTitle1"
import GameEconomy from "@/components/sections/GameEconomy"
import Hero from "@/components/sections/Hero"
import Seller1 from "@/components/sections/Seller1"
import TopCollections1 from "@/components/sections/TopCollections1"
import TopCollector1 from "@/components/sections/TopCollector1"
import UserWaitlistModal from "@/components/sections/UserWaitlistModal"
import { setUserDataToStore } from "@/components/store/profileDataSlice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
export default function Home() {

    const dispatch = useDispatch()
    useEffect(() => {
        const saved = localStorage.getItem('profileData');
        if (saved) {
            dispatch(setUserDataToStore(JSON.parse(saved)));
        }
    }, []);

    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    return (
        <>

            <Layout headerStyle={2} footerStyle={1} pageCls="home-1">
                <FlatTitle1 onWaitlistClick={() => setIsWaitlistOpen(true)} />
                <FeaturedItem1 />
                {/* <Seller1 /> */}
                <DiscoverItem1 />
                {/* <TopCollector1 /> */}
                <TopCollections1 />
                <CreateSell1 />
                <GameEconomy />
                <Action1 onWaitlistClick={() => setIsWaitlistOpen(true)} />
            </Layout>

            <UserWaitlistModal
                isOpen={isWaitlistOpen}
                onClose={() => setIsWaitlistOpen(false)}
            />
        </>
    )
}