import React from "react";
import AboutQuestPro from "../../component/about-us/about-questpro";
import OurStory from "../../component/about-us/our-story";
import Mission from "../../component/about-us/mission";

function AboutUs() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <AboutQuestPro />
      <OurStory />
      <Mission />
      {/* <Team /> */}
    </div>
  );
}

export default AboutUs;
