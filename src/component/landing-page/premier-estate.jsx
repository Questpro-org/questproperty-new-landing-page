import React, { useState } from "react";
import Pool from "../../assets/images/pool.svg";
import Restplace from "../../assets/images/restplace.svg";
import Parlour from "../../assets/images/parlour.svg";
import Pawn from "../../assets/images/pawn.svg";

function PremierEstate() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:px-16 px-8 py-16 gap-6">
        {/* Left section - Text */}
        <div className="lg:w-1/2">
          <h1 className="md:text-[32px] text-[20px] font-bold mb-4">
            Africa’s Premier Real Estate Marketplace
          </h1>
          <p className="md:text-[18px] text-[16px] text-[#666668]">
            Quest Properties Nigeria is Africa’s premier real estate
            marketplace, boasting a network of over 3,000 active agents and
            serving a community of 10,000 house seekers. Our platform is
            designed to harness cutting-edge technology, ensuring secure
            connections between property seekers and verified real estate agents
            and homeowners.
          </p>

          <p className="md:text-[18px] hidden lg:block text-[16px] text-[#666668] mt-4">
            Agents have the opportunity to engage with house seekers directly,
            while seekers can chat with these verified professionals seamlessly
            within our platform.
          </p>
          <p className="md:text-[18px] hidden lg:block text-[16px] text-[#666668] mt-4">
            Every agent undergoes thorough verification, providing peace of mind
            to seekers and mitigating the risk of scams. Our platform features
            properties from top states and cities, including popular
            destinations such as Lagos, Abuja, Rivers, Kano, Ogun, Oyo, and
            Enugu. Additionally, for short-term rentals, our platform showcases
            properties in sought-after cities like Ikeja, Lekki, Ikoyi, Ajah,
            Ibadan, Abuja, and Rivers.
          </p>

          {showMore && (
            <>
              <p className="md:text-[18px] text-[16px] text-[#666668] mt-4">
                Agents have the opportunity to engage with house seekers
                directly, while seekers can chat with these verified
                professionals seamlessly within our platform.
              </p>
              <p className="md:text-[18px] text-[16px] text-[#666668] mt-4">
                Every agent undergoes thorough verification, providing peace of
                mind to seekers and mitigating the risk of scams. Our platform
                features properties from top states and cities, including
                popular destinations such as Lagos, Abuja, Rivers, Kano, Ogun,
                Oyo, and Enugu. Additionally, for short-term rentals, our
                platform showcases properties in sought-after cities like Ikeja,
                Lekki, Ikoyi, Ajah, Ibadan, Abuja, and Rivers.
              </p>
            </>
          )}

          <button
            className="bg-white border border-[#03B4FF] text-[#03B4FF] lg:hidden font-medium mt-3 p-2 rounded-xl"
            onClick={handleToggle}
          >
            See More
          </button>
        </div>

        {/* Right section - Images */}
        <div className="flex gap-4">
          <div className="mt-14">
            <img src={Pool} alt="pool" className="rounded-lg" />
          </div>
          <div>
            <img src={Restplace} alt="Restplace" className=" rounded-lg" />
            <img src={Parlour} alt="Parlour" className="rounded-lg mt-3" />
          </div>
        </div>
      </div>

      <div className="bg-[#EAE6E6] lg:flex gap-8 h-[156px] lg:pt-16 pt-8 px-8 lg:px-16">
        <span className="text-[28px] hidden lg:inline-block text-[#666668] ">
          Trusted by 100+ Businesses
        </span>

        <p className="text-[18px] lg:text-left text-center font-medium lg:hidden text-[#666668] ">
          Trusted by 100+ Businesses
        </p>
        <img
          src={Pawn}
          alt="pawn"
          className="w-[126px] hidden lg:inline-block h-[36px]"
        />
        <img
          src={Pawn}
          alt="pawn"
          className="w-[126px] hidden lg:inline-block h-[36px]"
        />
        <img
          src={Pawn}
          alt="pawn"
          className="w-[126px] hidden lg:inline-block h-[36px]"
        />
        <img
          src={Pawn}
          alt="pawn"
          className="w-[126px] hidden lg:inline-block h-[36px]"
        />
        <img
          src={Pawn}
          alt="pawn"
          className="w-[126px] hidden lg:inline-block h-[36px]"
        />

        <div className="lg:hidden flex gap-12 mt-2">
          <img src={Pawn} alt="pawn" className="w-[80px] h-[24px]" />
          <img src={Pawn} alt="pawn" className="w-[80px] h-[24px]" />
          <img src={Pawn} alt="pawn" className="w-[80px] h-[24px]" />
        </div>
      </div>
    </>
  );
}

export default PremierEstate;
