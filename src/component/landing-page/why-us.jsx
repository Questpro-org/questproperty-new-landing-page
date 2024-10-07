import React from "react";
import Agent1 from "../../assets/images/agent1.svg";
import Agent2 from "../../assets/images/agent2.svg";
import Agent3 from "../../assets/images/agent3.svg";
import BarCode from "../../assets/images/barcode.svg";
import Flat from "../../assets/images/flat.svg";
import Icon from "../../assets/icon";

const testimonials = [
  {
    image: Agent1,
    quote:
      "QuestProperty has transformed the way I manage my listings. The user-friendly interface and powerful tools make it easy to attract and connect with potential buyers. It’s a game-changer for my business!",
    name: "Olawale Jordan",
    role: "Agent",
    stars: 5,
  },
  {
    image: Agent2,
    quote:
      "Since I started using QuestProperty, my workflow has become so much more efficient. The platform’s advanced search features and comprehensive analytics help me stay ahead in a competitive market.",
    name: "Chike Williams",
    role: "Agent",
    stars: 5,
  },
  {
    image: Agent3,
    quote:
      "As a property manager, efficiency is key, and QuestProperty delivers on every front. The platform’s advanced search and listing features have streamlined my workflow, allowing me to focus more on my clients.",
    name: "Sandra Orlu",
    role: "Agent",
    stars: 5,
  },
];

function WhyUs() {
  return (
    <div className="py-12">
      <h1 className="md:text-[32px] text-[18px] font-bold text-[#262626] text-center">
        What People Say About Us
      </h1>

      <p className="text-center mx-auto text-[#414141] md:text-[18px] text-[14px] mt-2">
        Don’t just take our words, hear from our <br className="lg:hidden" />{" "}
        customers and agents
      </p>

      {/* Mapping over testimonials */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 px-6 max-w-6xl mt-5 mx-auto md:mt-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-xl">
            <div className="text-[#FBBF24] text-[40px] font-bold mb-4">“</div>
            <p className="text-[#414141] text-[16px] mb-6">
              {testimonial.quote}
            </p>
            <hr className="bg-black" />
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-3">
                <img src={testimonial?.image} alt="pics" />
                <div>
                  <p className="text-[#000B18] font-medium text-[14px] md:text-[16px]">
                    {testimonial?.name}
                  </p>
                  <p className="text-[#666668] font-normal text-[16px] md:text-[14px]">
                    {testimonial?.role}
                  </p>
                </div>
              </div>
              <div className="flex">
                {Array(testimonial.stars)
                  .fill("⭐")
                  .map((star, idx) => (
                    <span key={idx} className="text-[#FFC107]">
                      {star}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#FFF] mt-28 py-10 lg:px-16 px-6 mx-auto">
        <div className="bg-[#8BDDFF] rounded-2xl lg:flex p-8">
        <img src={Flat} alt="flat" className=" lg:hidden" />
          <div>
            <h1 className="text-[#000B18] font-semibold text-[20px] lg:text-[48px]">
              Download QuestProperty App to Explore, Connect and Elevate Your
              Real Estate Experience.
            </h1>
            <section className="flex gap-3 mt-10">
              <img src={BarCode} alt="barcode" />
              <Icon name="googleicon" className="mt-10" />
              <Icon name="appleicon" className="mt-10" />
            </section>
          </div>
          <img src={Flat} alt="flat" className="hidden lg:inline-block" />
        </div>
      
      </div>
     
    </div>
  );
}

export default WhyUs;
