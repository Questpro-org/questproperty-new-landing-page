import React from "react";
import Blue from "../../assets/images/blue.png";
import Mansion from "../../assets/images/mansion.png";
import White from "../../assets/images/white.png";
import Rivers from "../../assets/images/Rivers.jpg";
import Enugu from "../../assets/images/Enugu.jpg";
import Abuja from "../../assets/images/Abuja.jpg";
import Lagos from "../../assets/images/Lagos.jpg";

function KeyFeatures() {
  return (
    <>
      <h3 className="lg:text-[32px] text-[18px] font-bold text-[#262626] text-center mt-16">
        Key Features
      </h3>
      <p className="lg:text-[18px] text-[14px] lg:w-full w-[60%] mx-auto mt-2 text-[#666668] text-center">
        Explore our stand out features and see what set us apart from the rest
      </p>

      <div className="lg:grid lg:grid-cols-2 lg:mx-16 mx-8 gap-16">
        <img src={Blue} alt="blue" className="lg:inline-block hidden" />
        <h1 className="text-[#262626] font-bold text-[20px] lg:text-[32px] mt-10 lg:mt-[170px]">
          Chat with verified Agent
          <span className="text-[16px] lg:text-[18px] block font-normal text-[#666668]">
            Quest Properties facilitates direct communication with verified
            agents, ensuring transparency and trust in every interaction. With a
            vast network of over 3,000 verified agents, seekers can engage with
            professionals who meet their specific needs, eliminating the risk of
            fraudulent practices.
          </span>
        </h1>
        <img src={Blue} alt="blue" className="lg:hidden" />

        <h1 className="text-[#262626] font-bold text-[20px] lg:text-[32px] mt-10 lg:mt-[170px]">
          View Properties in 3D
          <span className="text-[16px] lg:text-[18px] block font-normal text-[#666668]">
            Leveraging advanced technology from our parent company Questpro, we
            offer customers the option to view properties in immersive 3D mode.
            This innovative feature not only enhances the visualization
            experience but also saves costs associated with traditional property
            viewing methods, benefiting both agents and customers.
          </span>
        </h1>
        <img src={Mansion} alt="blue" />

        <img src={White} alt="blue" className="lg:inline-block hidden" />
        <h1 className="text-[#262626] font-bold text-[20px] lg:text-[32px] mt-10 lg:mt-[100px]">
          Make steady Revenue up to 2M Monthly
          <span className="text-[16px] lg:text-[18px] block font-normal text-[#666668]">
            As an agent by listing your property on Questproperty App. You stand
            a grand chance of making steady flow of revenue from the traffic on
            our app based on the multiple property packages which you get to
            advertise and the quality of users we have on our app.
          </span>
        </h1>
        <img src={White} alt="blue" className="lg:hidden" />
      </div>

      <h3 className="lg:text-[32px] text-[18px] font-bold text-[#262626] text-center mt-16">
        Featured Properties
      </h3>
      <p className="lg:text-[18px] text-[14px] lg:w-full w-[60%] mx-auto mt-2 text-[#666668] text-center">
        Check out some of the finest listings handpicked just for you
      </p>

      <div className="lg:grid lg:grid-cols-4 grid grid-cols-1 lg:gap-16 gap-5 p-8">
        <div className="relative">
          <img
            src={Rivers}
            alt="Rivers"
            className="hover:opacity-40 cursor-pointer h-[320px] w-full rounded-xl"
          />
          <span className="absolute bottom-3 left-3 text-white text-lg font-semibold bg-black bg-opacity-50 px-2 py-1 rounded">
            Rivers
          </span>
        </div>

        <div className="relative">
          <img
            src={Enugu}
            alt="Enugu"
            className="hover:opacity-40 cursor-pointer h-[320px] w-full rounded-xl"
          />
          <span className="absolute bottom-3 left-3 text-white text-lg font-semibold bg-black bg-opacity-50 px-2 py-1 rounded">
            Enugu
          </span>
        </div>

        <div className="relative">
          <img
            src={Abuja}
            alt="Abuja"
            className="hover:opacity-40 cursor-pointer h-[320px] w-full rounded-xl"
          />
          <span className="absolute bottom-3 left-3 text-white text-lg font-semibold bg-black bg-opacity-50 px-2 py-1 rounded">
            Abuja
          </span>
        </div>

        <div className="relative">
          <img
            src={Lagos}
            alt="Lagos"
            className="hover:opacity-40 cursor-pointer h-[320px] w-full rounded-xl"
          />
          <span className="absolute bottom-3 left-3 text-white text-lg font-semibold bg-black bg-opacity-50 px-2 py-1 rounded">
            Lagos
          </span>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="w-[142px] h-[46px] bg-[#03B4FF] text-white hover:opacity-50 rounded-lg mt-10">
          View All
        </button>
      </div>
    </>
  );
}

export default KeyFeatures;
