import Layout from "@/components/layout/Layout";
import AboutHero from "@/components/sections/AboutHero";
import Principle from "@/components/sections/Principle";
import InvestorBanner from "@/components/sections/InvestorBanner";
import CareersBanner from "@/components/sections/CareersBanner";
import InvestorPopupModal from "@/components/sections/InvestorPopupModal";
import { useState } from "react";
import UserWaitlistModal from "@/components/sections/UserWaitlistModal";
import UseCase from "@/components/sections/UseCase";
import GameEconomy from "@/components/sections/GameEconomy";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);


  return (
    <Layout headerStyle={2} footerStyle={1} pageCls="about-us-page">
      <div>
        <AboutHero onWaitlistClick={() => { setIsWaitlistOpen(true) }} />
        <Principle />
        <UseCase />
        <InvestorBanner onContactClick={() => setShowModal(true)} />
        <CareersBanner />
        <p className="text-lg mx-8 md:mx-64 sm:text-lg md:text-xl text-gray-400 tracking-widest mb-12 md:mb-0  font-medium">
          [ ECONOMY LAYER ]
        </p>
        <GameEconomy />
      </div>

      <InvestorPopupModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <UserWaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </Layout>
  );
}










