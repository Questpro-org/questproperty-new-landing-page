import React, { useState, useEffect } from 'react';

// List of images and text to display
const bannerData = [
  {
    image: '/images/banner1.jpg', // Example path to images
    text: "Your Ultimate Destination For Real Estate Excellence",
  },
  {
    image: '/images/banner2.jpg',
    text: "Find Your Dream Home With Us",
  },
  {
    image: '/images/banner3.jpg',
    text: "Explore the Best Properties in Your Area",
  },
];

function BannerSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    }, 3000); // 3 seconds for image transition

    return () => clearInterval(interval);
  }, []);

  const { image, text } = bannerData[currentIndex];

  return (
    <div 
      className="relative h-screen bg-cover bg-center transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{text}</h1>
        <p className="text-lg md:text-xl mb-8">
          Explore a wide range of properties, expert insights, and seamless experiences tailored to meet your real estate needs.
        </p>

        {/* Search Box */}
        <div className="flex bg-white bg-opacity-90 p-4 rounded-lg items-center space-x-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">Location</label>
            <input 
              type="text" 
              placeholder="Select Location" 
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">Property Type</label>
            <input 
              type="text" 
              placeholder="Select Property Type" 
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">Price Range</label>
            <input 
              type="text" 
              placeholder="Choose Price Range" 
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
