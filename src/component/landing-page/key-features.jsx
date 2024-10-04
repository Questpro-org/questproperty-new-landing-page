import React from "react";
import Blue from "../../assets/images/blue.svg";
import Mansion from "../../assets/images/mansion.svg";
import White from "../../assets/images/white.svg";
import Rivers from "../../assets/images/Rivers.svg";
import Enugu from "../../assets/images/enugu.svg";
import Abuja from "../../assets/images/Abuja.svg";
import Gbagada from "../../assets/images/gbagada.svg";
import Ajah from "../../assets/images/Ajah.svg";

function KeyFeatures() {
  const locations1 = [
    { name: "Rivers", imgSrc: Rivers },
    { name: "Enugu", imgSrc: Enugu },
    { name: "Abuja", imgSrc: Abuja },
  ];

  const locations2 = [
    { name: "Gbagada", imgSrc: Gbagada },
    { name: "Ajah", imgSrc: Ajah },
  ];
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

      <div className="lg:flex hidden gap-16 p-14 ">
        <img
          src={Rivers}
          alt={"Rivers"}
          className="h hover:opacity-40 cursor-pointer"
        />
        <img
          src={Enugu}
          alt={"Rivers"}
          className="h hover:opacity-40 cursor-pointer"
        />
        <img
          src={Abuja}
          alt={"Rivers"}
          className="h hover:opacity-40 cursor-pointer"
        />
      </div>

      <div className="lg:flex hidden gap-16  px-14">
        <img
          src={Gbagada}
          alt={"Rivers"}
          className="h hover:opacity-40 cursor-pointer"
        />
        <img
          src={Ajah}
          alt={"Rivers"}
          className="h hover:opacity-40 cursor-pointer"
        />
      </div>

      <div className="lg:hidden grid grid-cols-2 mt-5 gap-4 px-6">
        <img
          src={Rivers}
          alt={"Rivers"}
          className="h hover:opacity-40 cursor-pointer"
        />
        <img
          src={Enugu}
          alt={"Rivers"}
          className="h hover:opacity-40 cursor-pointer"
        />
        <img
          src={Abuja}
          alt={"Rivers"}
          className="h hover:opacity-40 cursor-pointer"
        />
        <img
          src={Gbagada}
          alt={"Rivers"}
          className="h hover:opacity-40 cursor-pointer"
        />
      </div>

      <img
        src={Ajah}
        alt={"Rivers"}
        className="mt-5 px-6 lg:hidden  hover:opacity-40 cursor-pointer"
      />
    </>
  );
}

export default KeyFeatures;
