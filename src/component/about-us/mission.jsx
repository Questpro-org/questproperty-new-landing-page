import React from "react";
import Vission from "../../assets/images/mission.svg";

function Mission() {
  return (
    <div className="bg-[#FBFCFD] px-7 lg:px-14 mt-32 py-24">
      <div className="lg:flex gap-14">
        <img src={Vission} alt="mission" />
        <section>
          <h1 className="text-[#000B18] text-[20px] lg:text-[32px] lg:mt-0 mt-10">Our Mission</h1>
          <p className="text-[16px] lg:text-[18px] text-[#666668]">
            Our mission at Questproperty Africa is to revolutionize the real estate
            experience by providing unparalleled service, innovative technology,
            and a deep commitment to our clients. We strive to be the trusted
            partner for all your property needs, offering expert guidance and
            comprehensive listings that make your property search simple and
            successful.
          </p>

          <h1 className="text-[#000B18] text-[20px] lg:text-[32px] mt-10">Our Vision</h1>
          <p className="text-[16px] lg:text-[18px] text-[#666668]">
            Our vision is to become the leading real estate platform, known for
            our integrity, innovation, and excellence. We aim to empower
            individuals and businesses to make informed decisions by providing
            them with the most accurate and up-to-date property information
            available. Through our dedication to customer satisfaction and
            cutting-edge technology, we aspire to redefine the standards of the
            real estate industry.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Mission;
