import { useEffect, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";


function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const iconName = isMenuOpen ? "menuIconClose" : "menuIconOpen";
  const isLoggedIn = localStorage.getItem("token");
  const userJSON = localStorage.getItem("user");
  const user = userJSON ? JSON.parse(userJSON) : null;
  const logoLink = isLoggedIn ? "/dashboard" : "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const routes = isLoggedIn
    ? [
        { path: "/dashboard", label: "Dashboard" },
        { path: "/about", label: "About Us" },
        { path: "/how-it-works", label: "How it works" },
        { path: "/pricing", label: "Pricing" },
        { path: "/terms", label: "Terms and Conditions" },
        { path: "/privacy-policy", label: "Privacy Policy" },
        { path: "/faq", label: "Frequently Asked Questions" },
       
        { path: "/contact", label: "Customer Support" },
       
      ]
    : [
        { path: "/", label: "VendStash" },
        { path: "/signin", label: "Sign in" },
        { path: "/signup", label: "Create Account" },
        { path: "/about", label: "About" },
        { path: "/pricing", label: "Pricing" },
        { path: "/how-it-works", label: "How it works" },
        { path: "/terms", label: "Terms and Conditions" },
        { path: "/privacy-policy", label: "Privacy Policy" },
        { path: "/faq", label: "Frequently Asked Questions" },
        { path: "/contact", label: "Customer Support" },
      ];


  return (
    <div className="relative bg-[#fff] border-b-[1px] border-[#000]">
      <div className="max-w-screen-xl mx-auto py-6 px-4 relative z-50">
        <div className="flex justify-between items-center cursor-pointer">
          <Link
            to={logoLink}
            className="w-[300px] md:w-[180px] h-[10px] md:h-[15px]"
          >
          
          </Link>

          <div className="basis-1/2 flex justify-end gap-x-4">
          
              <Link to="/about" className="hidden sm:block">
                <button className=" text-[14px] font-medium hidde sm:blck">
                  About Us
                </button>
              </Link>
          
         
              <Link to="/pricing" className="hidden sm:block">
                <button className="text-[14px] font-medium px-8 hidde sm:blck">
                  Pricing
                </button>
              </Link>
           
          </div>

          <div className="basis-1/2 flex justify-end gap-x-4">
           
              <Link to="/signin" className="hidden sm:block">
                <button className="px-12 rounded-xl border-2 border-[#0979A1] text-[#0979A1] text-[12px] h-[40px] font-bold hidde sm:blck">
                  Sign In
                </button>
              </Link>
          

            
              <Link to="/signup" className="hidden sm:block">
                <button className="px-12 rounded-xl bg-[#0979A1] text-white h-[40px] text-[12px] font-bold hidde sm:blck">
                  Create An Account
                </button>
              </Link>
            

            <div className="flex items-center gap-4 pr-12 lg:gap-8">
             

              <button onClick={toggleMenu} className="block md:hidden">
                {/* <Icon name={iconName} className="w-[32px]" /> */}
              </button>

              {isLoggedIn && (
                <button onClick={toggleMenu} className="hidden md:block">
                  {/* <Icon name={iconName} /> */}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className=" md:relative md:max-w-[100%] h-[900px] md:[600px] md:bg-[#F8F8F8]  max-w-[100%] ml-auto inset-0 md:mt-6 lg:mt-36 z-50 md:-z-0 justify-center"
          onClick={toggleMenu}
        >
          <div className="relative top-[220px] z-50 md:top-[75px] md:w-full left-1/2 w-[100%] bg-white -mt-10 md:mt-36 lg:mt-0 md:bg-[#F8F8F8] transform -translate-x-1/2 -translate-y-1/2 pt-8 rounded-md">
            <div className="w-[100%] max-w-screen-xl mx-auto flex items-center justify-end p-1 xl:container xl:pr-[7%] mt-2 md:hidden">
              <button onClick={toggleMenu} className="p-2 mr-6">
                {/* <Icon name={iconName} /> */}
              </button>
            </div>
            <ul
              className={classNames(
                "flex flex-col gap-3 items-center md:text-[26px] h-[450px] text-center text-[#040821] font-OrbiterFBSTrial font-semibold",
                {
                  "mt-6": user?.userType === "buyer",
                  "mt-10": user?.userType === "merchant",
                }
              )}
            >
              {/* {routes.map((route) => (
                <li
                  key={route.path}
                  className={classNames("font-OrbiterFBSTrial font-semibold", {
                    "text-[#0979A1] text-[16px] text-3x border-b-3 border-[#0979A1]":
                      location.pathname === route.path,
                    "text-[13px] hover:text-2xl hover:scale-y-100":
                      location.pathname !== route.path,
                  })}
                >
                  {route.onClick ? (
                    <button onClick={route.onClick}>{route.label}</button>
                  ) : (
                    <Link to={route.path}>{route.label}</Link>
                  )}
                </li>
              ))} */}
            </ul>
            <div className="w-[100%] md:-mt-20 text-center hidden md:block   text-gray-600 font-Nunito text-base font-normal">
              Copyright © {new Date().getFullYear()} VendStash
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Navbar;
