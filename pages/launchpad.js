import Layout from '@/components/layout/Layout';
import Action2 from '@/components/sections/Action2';
import BecomeCreatorHero from '@/components/sections/BecomeCreatorHero';
import BecomeCreatorSlider from '@/components/sections/BecomeCreatorSlider';
import FAQComponent from '@/components/sections/FAQComponent';
import HowItsWork from '@/components/sections/HowItsWork';
import CommingSoonStudio from '@/components/sections/CommingSoonStudio';
import UserWaitlistModal from '@/components/sections/UserWaitlistModal';
import { useState } from 'react';
import GameEconomy from '@/components/sections/GameEconomy';

export default function LaunchPad() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Layout headerStyle={2} footerStyle={1} pageCls="home-1">
        <BecomeCreatorHero onWaitlistClick={() => setIsWaitlistOpen(true)} />
        <HowItsWork />
        <BecomeCreatorSlider />
        <CommingSoonStudio />
        <GameEconomy />
        <FAQComponent />
        <Action2 onWaitlistClick={() => setIsWaitlistOpen(true)} />
      </Layout>

      <UserWaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
}
