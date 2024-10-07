import React from "react";

function JoinWaitlist() {
  return (
    <div className="bg-[#F3F5F8] py-12 px-6 lg:px-14 lg:flex items-center justify-center">
      <h2 className="text-[#1D1F20] font-bold text-[24px] md:text-[48px]">
        Be a Beta Tester: Join the Future of Real Estate
        <p className="text-[#414141] font-normal text-[14px] md:text-[18px] max-w-lg mt-4">
        Be the first to experience the future of real estate - sign up with your email to become a beta tester for QuestProperty.
      </p>
      </h2>
     

      <div className="flex mt-6 items-center rounded-xl bg-white w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className=" p-4 text-sm w-full focus:outline-none outline-none"
        />
        <button className="bg-[#000B18] rounded-lg text-[14px] lg:text-[16px] text-white h-[42px] w-[133px] hover:opacity-50 mr-3">
          Join Waitlist
        </button>
      </div>

    </div>
  );
}

export default JoinWaitlist;
