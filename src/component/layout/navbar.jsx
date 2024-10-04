import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../assets/icon";
import Logo from "../../assets/images/questlogo.svg";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const iconName = isMenuOpen ? "menucloseicon" : "menuopenicon";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
    { path: "/faqs", label: "FAQs" },
  ];

  return (
    <div className={classNames(
      "fixed top-0 left-0 right-0 bg-[#fff] h-[88.5px] shadow-md shadow-[#DCDEE180] transition-all duration-300 z-50",
      {
        "b bg-opacity-70": scrolled
      }
    )}>
      <div className="max-w-screen-xl mx-auto md:py-6 py-3 md:px-14 px-4 relative">
        <div className="flex justify-between items-center cursor-pointer">
          <Link to="/" className="w-[300px] md:w-[180px] h-[10px] md:h-[15px]">
            <img src={Logo} alt="logo" />
          </Link>

          <div className="flex gap-8 text-[16px] h-[30px] justify-end">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={classNames(
                  "text-[14px] font-bold gap-9 px-2 py-1 hidden md:block w-fit",
                  {
                    "text-[#fff] bg-[#03B4FF] rounded-2xl":
                      location.pathname === route.path,
                  }
                )}
              >
                <button>{route.label}</button>
              </Link>
            ))}
          </div>

          <Link to="/signup" className="hidden md:block">
            <button className="px-12 rounded-xl bg-[#03B4FF] text-white h-[40px] text-[12px] font-bold">
              Join Waitlist
            </button>
          </Link>

          <button onClick={toggleMenu} className="block md:hidden pt-4">
            <Icon name={iconName} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:relative md:max-w-[100%] md:[600px] ml-auto inset-0 z-50 justify-center">
          <div className="relative top-[263px] z-50 md:top-[75px] md:w-full left-1/2 w-[100%] bg-[#F8F8F8] transform -translate-x-1/2 -translate-y-1/2 pt-8 rounded-md">
            <ul className="flex flex-col gap-3  leading-[60px] text-[20px] px-7 md:text-[26px] h-[450px] text-left text-[#040821] font-semibold">
              {routes.map((route) => (
                <li
                  key={route.path}
                  className={classNames(
                    "font-semibold border-b-2 border-[#fff]",
                    {
                      "text-[#03B4FF] border-b-3 border-[#0979A1]":
                        location.pathname === route.path,
                    }
                  )}
                >
                  <Link to={route.path}>{route.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden px-5">
            <button className="px-12 rounded-xl bg-[#03B4FF] text-white w-full h-[40px] text-[12px] font-bold">
              <Link to="/signup">Join Waitlist</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;