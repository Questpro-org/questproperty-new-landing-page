import React from "react";
import Marked from "../../assets/images/mark.svg";
import Padlock from "../../assets/images/padlock.svg";
import Customer from "../../assets/images/customer.svg";
import Star from "../../assets/images/star.svg";

const WhyQuestProperty = () => {
  const cards = [
    {
      icon: Marked,
      title: "Verified Listings",
      description: "At Quest Properties, all agents undergo a rigorous verification process to mitigate the risk of fraud and provide peace of mind to property seekers. Our verification protocols ensure that each agent's identity is authenticated, enhancing transparency and authenticity in property listings.",
    },
    {
      icon: Padlock,
      title: "Security and Privacy",
      description: "QuestPro prioritizes the security and privacy of its users' data. We employ robust encryption measures and adhere to strict privacy policies to ensure that sensitive information remains protected at all times.",
    },
    {
      icon: Customer,
      title: "Customer Support",
      description: "QuestPro offers dedicated customer support to assist users with any inquiries or issues they may encounter. Our team is committed to providing prompt and helpful assistance, ensuring a positive experience for all users.",
    },
    {
      icon: Star,
      title: "User Reviews and Ratings",
      description: "QuestPro features user reviews and ratings for properties and agents, allowing users to make informed decisions based on real feedback from other clients. This transparency promotes trust and helps users assess the quality of listings and services.",
    },
  ];

  return (
    <div className="bg-white py-12 mt-24">
      <h1 className="md:text-[32px] text-[18px] font-bold text-[#262626] text-center mb-4">
        Why QuestProperty?
      </h1>

      <p className="text-center lg:w-[624px] w-[324px] mx-auto text-[#414141] md:text-[18px] text-[14px] mb-12">
        Trust is our trademark. We are committed to the security of your
        apartment choice and the protection of your transaction.
      </p>

      <div className="grid grid-cols-1 gap-24 sm:grid-cols-2 px-6 max-w-6xl mx-auto md:mt-32">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-md border rounded-lg p-6">
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
    </div>
  );
};

export default WhyQuestProperty;
