import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/questpro.svg";
import Icon from "../../assets/icon";

const Footer = () => {
  return (
    <div className="mt-[70px] text-[#290202] bg-[#56CDFF]">
      <div className="w-[94%] mx-auto pt-7">
        <div className="md:lg:col-span-2 ml-6 md:col-span-1 md:hidden">
          <img src={Logo} alt="logo" />
          <h1 className="text-[#290202] text-[24px] font-bold">
            Questproperty
          </h1>
          <p className="text-[16px] font-medium mr-3 mt-3">
            Africa’s premier real estate market <br /> place
          </p>
          <section className="flex md:gap-5 gap-2 mt-2">
            <Link
              to="https://x.com/vendstash?s=20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="twittericon" />
            </Link>

            <Link
              to="https://web.facebook.com/people/Vendstash/61554099410029/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="facebookicon" />
            </Link>

            <Link
              to="https://www.instagram.com/vendstash_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="igicon" />
            </Link>

            <Link
              to="https://www.linkedin.com/company/vendstash/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedinicon" />
            </Link>
          </section>
        </div>
        <section className="grid lg:grid-cols-5 grid-cols-2 pl-6 gap-7 md:gap-0 md:pl-0">
          <div className="md:block md:lg:col-span-2 md:col-span-1 hidden">
            <img src={Logo} alt="logo" />
            <h1 className="text-[#290202] text-[24px] font-bold">
              Questproperty
            </h1>
            <p className="text-[16px] font-medium mr-3 mt-3">
              Africa’s premier real estate market <br /> place
            </p>
            <section className="flex md:gap-5 gap-2 mt-2">
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="twittericon" />
              </Link>

              <Link
                to="https://web.facebook.com/people/Vendstash/61554099410029/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="facebookicon" />
              </Link>

              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="igicon" />
              </Link>

              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="linkedinicon" />
              </Link>
            </section>
          </div>

          <div className="col-span-1 md:mt-0 mt-9">
            <h3 className="text-[16px] font-bold">Company</h3>
            <ul className="mt-4 text-[14px] font-medium leading-8">
              <li>
                <Link to="/#about"> About</Link>
              </li>
              <li>
                <Link to="/#career">Career</Link>
              </li>
              <li>
                <Link to="/#agent">Agents</Link>
              </li>
              <li>
                <Link to="/#pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/#contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:mt-0 mt-9">
            <h3 className="text-[16px] font-bold">Services</h3>
            <ul className="mt-4 text-[14px] font-medium leading-8">
              <li>Shortlet Apartment</li>
              <li>Property For Sale</li>
              <li>Property For Rent</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[16px] font-bold">Contact</h3>
            <ul className="mt-4 text-[14px] font-medium leading-8">
              <li className="flex gap-3">
                {" "}
                <Icon name="supporticon" /> Support@questpro.ng
              </li>
              <li className="flex gap-3">
                {" "}
                <Icon name="supporticon" /> Support@questpro.ng
              </li>
            </ul>
          </div>
        </section>

        <hr className="mt-12" />
        {/* <img src={Logo} alt="logo" className="md:hidden mt-8" /> */}

        <p className="md:text-[16px] text-center text-[10px] font-medium py-8">
          Copyright © {new Date().getFullYear()} Questpro Technology. All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
