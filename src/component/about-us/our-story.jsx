import React from "react";
import Housing from "../../assets/images/housing.png";
import Housing2 from "../../assets/images/housing-mobile.png";
import Listings from "../../assets/images/listings.svg";
import Customers from "../../assets/images/customers.svg";
import Listings2 from "../../assets/images/listing2.svg";
import Customers2 from "../../assets/images/customer2.svg";

import Integrity from "../../assets/images/integrity.svg";
import Innovations from "../../assets/images/innovations.svg";
import Excellence from "../../assets/images/excellence.svg";
import CustomerCare from "../../assets/images/customer-care.svg";
import Sustain from "../../assets/images/sustain.svg";
import Collaboration from "../../assets/images/collaboration.svg";
import Icon from "../../assets/icon";

const cards = [
  {
    icon: Integrity,
    title: "Integrity",
    description:
      "We believe in conducting business with the highest standards of honesty, transparency, and fairness. Our commitment to integrity ensures that every transaction is built on trust.",
  },
  {
    icon: Innovations,
    title: "Innovations",
    description:
      "In a rapidly changing real estate market, we embrace innovation to offer cutting-edge solutions that make property transactions more efficient and enjoyable for our clients.",
  },
  {
    icon: Excellence,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do. From the quality of our property listings to the level of customer service we provide, we are dedicated to exceeding expectations.",
  },
  {
    icon: CustomerCare,
    title: "Customer Centricity",
    description:
      "Our clients are at the heart of everything we do. We listen, understand, and cater to their unique needs, ensuring a personalized and satisfying experience every time.",
  },
  {
    icon: Sustain,
    title: "Sustainability",
    description:
      "We are committed to promoting sustainable practices in the real estate industry, from environmentally friendly construction to encouraging the use of energy-efficient properties.",
  },
  {
    icon: Collaboration,
    title: "Collaboration",
    description:
      "Working together to achieve extraordinary results. Our commitment to collaboration ensures that every partnership drives success and innovation.",
  },
];

function OurStory() {
  return (
    <>
      <div className="px-7 lg:px-14 lg:flex py-24">
        <div className="relative lg:w-1/2">
          <img src={Housing} alt="House" className="h-auto hidden lg:block" />
          <img
            src={Housing2}
            alt="House"
            className="rounded-lg h-auto lg:hidden"
          />

          {/* Virtual Home Tour */}
          <div className="absolute top-4 left-8 bg-white border-[1px] border-[#03B4FF] shadow-[#03B4FF] shadow  p-4 rounded-lg flex items-center gap-7">
            <div className="ml-3">
              <h3 className="font-semibold lg:text-[20px] text-[16px]">
                Virtual home tour
              </h3>
              <p className="lg:text-[16px] text-[14px]">
                We provide you with a virtual tour
              </p>
            </div>
            <Icon name="exploreicon" />
          </div>

          <div className="absolute -bottom-5 border-[1px] border-[#03B4FF] right-24 bg-white shadow-[#03B4FF] shadow p-4 rounded-lg flex items-center gap-7">
            <div className="ml-3">
              <h3 className="font-semibold lg:text-[20px] text-[16px]">
                Find the best deal
              </h3>
              <p className="lg:text-[16px] text-[14px]">
                Browse thousands of properties
              </p>
            </div>
            <Icon name="homeicon" />
          </div>
        </div>

        <div className="lg:mx-10 lg:mt-14  lg:w-1/2">
          <p className="text-[#03B4FF] font-normal text-[18px] lg::text-[24px] ">
            Our Story
          </p>
          <h1 className="lg:text-[32px] text-[20px] text-[#000B18] mt-4">
            African Presence
          </h1>
          <p className="text-[#666668] mt-6">
            With a strong presence in over 20 states across Nigeria, we are
            committed to expanding our reach to Ghana and Liberia by the
            beginning of 2025. As a subsidiary of a software company, we
            leverage cutting-edge technology to deliver the best possible
            experience for both agents and customers.
          </p>

          <p className="text-[#666668] mt-6">
            Our proprietary algorithm is at the heart of our operations,
            enabling us to curate and showcase the most relevant and
            high-quality boosted properties to users based on their preferences
            and location. This advanced technology ensures that property seekers
            are presented with listings that align with their specific needs and
            interests, enhancing their overall browsing experience and
            increasing the likelihood of finding their ideal property.
          </p>
          <div className="lg:mt-6 mx-auto mt-14 lg:flex gap-y-5 items-cente gap-7">
            <img src={Customers} alt="cust" className="lg:block hidden" />
            <img src={Listings} alt="cust" className="lg:block hidden" />
            <img src={Customers2} alt="cust" className="mx-auto lg:hidden" />
            <img
              src={Listings2}
              alt="cust"
              className="lg:hidden mt-10 mx-auto"
            />
          </div>
        </div>
      </div>

      <h1 className="text-[18px] lg:text-[32px] text-[#262626] text-center">
        Our Core Values
      </h1>

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 px-6 max-w-6xl mx-auto mt-14">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-md border rounded-xl p-6">
            <div className="items-center">
              <img src={card.icon} alt="card" className="text-4xl" />
              <h3 className=" text-[16px] md:text-[18px] font-bold text-[#262626] mt-5">
                {card?.title}
              </h3>
            </div>
            <p className="mt-4 text-[#666668] text-[14px]  md:text-[16px]">
              {card?.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default OurStory;
