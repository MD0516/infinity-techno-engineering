import React, { useEffect, useState } from "react";
import ite_h from "../../assets/ite_h.svg";
import menu from "../../assets/menu.svg";
import cross from "../../assets/cross.svg";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setPrevScrollPos(window.scrollY);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (Math.abs(currentScrollPos - prevScrollPos) > 10) {
      setVisible(currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    }
  };

  useEffect(() => {
    const throttled = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttled);

    return () => {
      window.removeEventListener("scroll", throttled);
    };
  }, [prevScrollPos]);

  const handleNavLinkClick = () => {
    setVisible(false);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        visible ? "top-0" : "-top-24"
      } fixed w-full z-49 flex justify-center`}
      id="NB"
    >
      <div className="w-full">
        <nav
          className="w-full h-fit px-4 py-2 flex justify-between items-center text-white"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <div className="flex items-center space-x-2">
            <a href="https://md0516.github.io/infinity-techno-engineering/">
              <img
                src={ite_h}
                alt="logo"
                className="w-10 h-10 sm:w-16 md:16 cursor-pointer"
              />
            </a>
            <a
              href="https://md0516.github.io/infinity-techno-engineering/"
              className="font-black"
            >
              <h1 className="text-[1.2rem] md:text-2xl inline">Infinity Techno Engineering</h1>
            </a>
          </div>
          <div>
            <img
              src={isClicked ? cross : menu}
              onClick={() => {
                setIsClicked((prev) => !prev);
              }}
              className="w-6 h-6 sm:hidden cursor-pointer"
              alt="menu"
            />
            <ul className="hidden sm:flex sm:flex-row sm:space-x-4 sm:space-y-0">
              <li className="hover:text-[var(--neutralDark)]">
                <a href="#Home" onClick={handleNavLinkClick}>
                  Home
                </a>
              </li>
              <li className="hover:text-[var(--neutralDark)]">
                <a href="#Services" onClick={handleNavLinkClick}>
                  Services
                </a>
              </li>
              <li className="hover:text-[var(--neutralDark)]">
                <a href="#About" onClick={handleNavLinkClick}>
                  About
                </a>
              </li>
              <li className="hover:text-[var(--neutralDark)]">
                <a href="#Contact" onClick={handleNavLinkClick}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Nav */}
        <div
          className={`sm:hidden bg-[var(--primary)] text-[1.3rem] ${
            animate ? "animate-pulse" : ""
          } ${visible ? "" : "hidden"} transition-all duration-300 px-4 py-2`}
        >
          <ul
            className={`${
              isClicked ? "flex flex-col space-y-5 text-white" : "hidden"
            }`}
          >
            <a href="#Home" onClick={handleNavLinkClick}>
              <li className="border-b-2 border-[var(--secondary)] w-full text-center py-2 hover:bg-[var(--secondary)] hover:text-[var(--accent)]">
                Home
              </li>
            </a>
            <a href="#Services" onClick={handleNavLinkClick}>
              <li className="border-b-2 border-[var(--secondary)] w-full text-center py-2 hover:bg-[var(--secondary)] hover:text-[var(--accent)]">
                Services
              </li>
            </a>
            <a href="#About" onClick={handleNavLinkClick}>
              <li className="border-b-2 border-[var(--secondary)] w-full text-center py-2 hover:bg-[var(--secondary)] hover:text-[var(--accent)]">
                About
              </li>
            </a>
            <a href="#Contact" onClick={handleNavLinkClick}>
              <li className="border-b-2 border-[var(--secondary)] w-full text-center py-2 hover:bg-[var(--secondary)] hover:text-[var(--accent)]">
                Contact
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
