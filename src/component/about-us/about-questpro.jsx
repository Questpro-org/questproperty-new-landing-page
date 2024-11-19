import React from "react";
import BgImage from "../../assets//images/Bitmap.svg";
import AboutUs from "../../assets/images/about-us.png";
import AboutUsMobile from "../../assets/images/about-us-mobile.png";

function AboutQuestPro() {
  return (
    <>
      <div
        className="relative  bg-cover bg-center  border-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <h1 className="text-center lg:text-[52px] text-[24px] lg:mt-28 mt-36 lg:w-[49%] mx-auto">
          About Questproperty Africa
          <span className="text-[#666668] px-2 md:px-0 text-[18px] block lg:mt-0 mt-4">
            Questproperty Africa is a distinguished subset of Questproperty Africa, specializing in property listing and real estate
            services, including lands, houses, and short-term apartment rentals
          </span>
        </h1>
        <img
          src={AboutUs}
          alt="about"
          className="mx-auto py-24 hidden md:block"
        />
        <img
          src={AboutUsMobile}
          alt="about"
          className="mx-auto py-14 md:hidden"
        />
      </div>
    </>
  );
}

export default AboutQuestPro;
