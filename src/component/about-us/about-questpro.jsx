import React from "react";
import BgImage from "../../assets//images/Bitmap.svg";
import AboutUs from "../../assets/images/about-us.svg";
import AboutUsMobile from "../../assets/images/about-us-mobile.svg";

function AboutQuestPro() {
  return (
    <>
      <div
        className="relative  bg-cover bg-center  border-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <h1 className="text-center lg:text-[52px] text-[24px] lg:mt-28 mt-36 lg:w-[49%] mx-auto">
          About Quest Property
          <span className="text-[#666668] text-[18px] block lg:mt-0 mt-4">
            Quest Properties is a distinguished subset of Questpro Technology,
            specializing in property listing and real estate services, including
            lands, houses, and short-term apartment rentals
          </span>
        </h1>
        <img src={AboutUs} alt="about" className="mx-auto py-24 hidden md:block" />
        <img src={AboutUsMobile} alt="about" className="mx-auto py-14 md:hidden" />
      </div>
    </>
  );
}

export default AboutQuestPro;
