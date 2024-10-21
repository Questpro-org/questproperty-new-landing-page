import React from "react";
import BannerSection from "../../component/landing-page/banner-section";
import PremierEstate from "../../component/landing-page/premier-estate";
import KeyFeatures from "../../component/landing-page/key-features";
import WhyQuestpro from "../../component/landing-page/why-questpro";
import WhyUs from "../../component/landing-page/why-us";
import JoinWaitlist from "../../component/landing-page/join-waitlist";

function LandingPage() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <BannerSection />
      <PremierEstate />
      <KeyFeatures />
      <WhyQuestpro />
      <WhyUs />
      <JoinWaitlist />
    </div>
  );
}

export default LandingPage;
