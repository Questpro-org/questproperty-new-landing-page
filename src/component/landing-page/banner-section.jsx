import React, { useState, useEffect } from "react";
import Banner1 from "../../assets/images/banner1.svg";
import Banner2 from "../../assets/images/banner2.svg";
import Banner3 from "../../assets/images/banner3.svg";
import Icon from "../../assets/icon";

const bannerData = [
  {
    image: Banner2,
    text: " Your Ultimate Destination For",
    highlightedText: " Real Estate Excellence",
    activeOptionIndex: 0,
  },
  {
    image: Banner3,
    text: "Your Ideal Shortlet Solution",
    highlightedText1: "Short Term Luxury: ",
    activeOptionIndex: 1,
  },
  {
    image: Banner1,
    text: " Tailored To Your Lifestyle",
    highlightedText1: " Discover Rental Options",
    activeOptionIndex: 2,
  },
];

const options = ["Buy", "Rent", "Shortlet"];

function BannerSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { image, activeOptionIndex, text, highlightedText, highlightedText1 } =
    bannerData[currentIndex];

  return (
    <div
      className="relative lg:h-[120vh] h-screen bg-cover bg-center transition-all duration-500 ease-in-out border-0 rounded-br-[100px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center text-white lg:px-14 px-7 bg-black bg-opacity-50 rounded-br-[100px]">
        <div className="lg:w-[65%] w-full ">
          {/* Heading with dynamic color */}
          <h1 className="text-4xl md:text-[60px] font-semibold mb-4 lg:leading-[60px] leading-[40px] text-24px lg:mt-0">
          <span className="text-[#03B4FF]">{highlightedText1}</span>
            {text}
            <span className="text-[#03B4FF]">{highlightedText}</span>
          </h1>

          <p className=" md:text-[20px] text-[14px] mb-8">
            "Explore a wide range of properties, expert insights, and seamless
            experiences tailored to meet your real estate needs."
          </p>

          {/* Dynamic Options (Buy, Rent, Shortlet) */}
          <div className="flex gap-8 mb-6 border-b-[1px] w-[300px]">
            {options.map((option, index) => (
              <button
                key={index}
                className={`text-lg font-medium pb-2 w-full hover:text-[#03B4FF] ${
                  activeOptionIndex === index
                    ? "text-[#03B4FF] border-b-2 border-[#03B4FF]"
                    : "text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="flex md:gap-4 gap-1  bg-white bg-opacity-90 p-4 lg:h-[100px] h-[44px] rounded-lg items-center lg:w-full w-[279px]">
            <div className="flex flex-col lg:border-r-2 lg:border-[#fff]">
              <label className="text-[12px] text-black font-semibold mb-1">
                Location, 
              </label>
              <input
                type="text"
                placeholder="Select Location"
                className="lg:inline-block hidden px-4 py-2 rounded-lg text-[#666668] border-gray-300 bg-transparent outline-none border-none "
              />
            </div>
            <div className="flex flex-col lg:border-r-2 lg:border-[#fff]">
              <label className="text-[12px] font-semibold text-black mb-1">
                Property Type, 
              </label>
              <input
                type="text"
                placeholder="Select Property Type"
                className="lg:inline-block hidden px-4 py-2 rounded-lg text-[#666668] border-gray-300 bg-transparent outline-none border-none "
              />
            </div>
            <div className="flex flex-col lg:border-r-2 lg:border-[#fff]">
              <label className="text-[12px] text-black font-semibold mb-1">
                Price Range, 
              </label>
              <input
                type="text"
                placeholder="Choose Price Range"
                className="lg:inline-block hidden px-4 py-2 rounded-lg text-[#666668] border-gray-300 bg-transparent outline-none border-none "
              />
            </div>
            <button className="flex items-center justify-center bg-[#03B4FF] text-white lg:h-[60px] lg:w-[60px] h-[30px] w-[30px] rounded-lg lg:rounded-2xl">
              <Icon name="searchicon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;