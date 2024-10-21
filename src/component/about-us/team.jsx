import React from "react";
import Julius from "../../assets/images/julius.svg";
import Sandra from "../../assets/images/sandra.svg";
import Adewale from "../../assets/images/adewale.svg";
import Susan from "../../assets/images/susan.svg";

function Team() {
  return (
    <div className="py-20">
      <h1 className="text-[18px] lg:text-[32px] text-[#262626] text-center">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-2 gap-8 lg:gap-0 lg:flex justify-between mt-8 px-7 lg:px-36">
        <section>
          <img src={Julius} alt="julius" />
          <h3 className="text-[18px] lg:text-[28px] text-[#000B18] text-center">
            Julius O. Noah
          </h3>
          <p className="text-[14px] lg:text-[20px] text-[#03A4E8] text-center">
            CEO & Founder
          </p>
        </section>

        <section>
          <img src={Sandra} alt="julius" />
          <h3 className="text-[18px] lg:text-[28px] text-[#000B18] text-center">
            Sandra Orlu
          </h3>
          <p className="text-[14px] lg:text-[20px] text-[#03A4E8] text-center">
            Real Estate Devolper
          </p>
        </section>

        <section>
          <img src={Adewale} alt="julius" />
          <h3 className="text-[18px] lg:text-[28px] text-[#000B18] text-center">
            Adewale Samson
          </h3>
          <p className="text-[14px] lg:text-[20px] text-[#03A4E8] text-center">
            Listing Agent
          </p>
        </section>
        <section>
          <img src={Susan} alt="julius" />
          <h3 className="text-[18px] lg:text-[28px] text-[#000B18] text-center">
            Susan Oladele
          </h3>
          <p className="text-[14px] lg:text-[20px] text-[#03A4E8] text-center">
            Buyer’s Agent
          </p>
        </section>
      </div>
    </div>
  );
}

export default Team;
