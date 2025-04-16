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
  });

  useEffect(() => {
    setPrevScrollPos(window.scrollY);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // Only update visibility if the scroll difference is significant
    if (Math.abs(currentScrollPos - prevScrollPos) > 10) {
      setVisible(currentScrollPos < prevScrollPos); // Show if scrolling up
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
        visible ? "top-0" : "-top-25"
      } fixed w-full z-[999] `}
      id="NB"
    >
      <nav
        className="w-full h-fit p-4 flex flex-row sm:flex-row  justify-between items-center  text-white"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div className="flex items-center space-x-2">
          <a href="https://md0516.github.io/infinity-techno-engineering/">
            <img src={ite_h} alt="logo" className="w-16 h-16 cursor-pointer" />{" "}
          </a>
          <a
            href="https://md0516.github.io/infinity-techno-engineering/"
            className="font-black"
          >
            <h1 className="text-[1.5rem] inline">
              Infinity Techno Engineering
            </h1>
          </a>
        </div>
        <div>
          <img
            src={isClicked ? cross : menu}
            onClick={() => {
              setIsClicked((prev) => !prev);
            }}
            className="w-8 h-8 sm:hidden cursor-pointer"
            alt="menu"
          />
          <ul className="hidden sm:flex sm:flex-row sm:space-x-4 sm:space-y-0">
            <li>
              <a href="#Home" onClick={handleNavLinkClick}>
                Home{" "}
              </a>
            </li>
            <li>
              <a href="#Services" onClick={handleNavLinkClick}>
                Services{" "}
              </a>
            </li>
            <li>
              <a href="#About" onClick={handleNavLinkClick}>
                About{" "}
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={handleNavLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={`flex justify-center items-center bg-[var(--primary)] text-[1.3rem] ${
          animate ? "animate-pulse" : ""
        } ${
          visible ? "" : "hidden"
        } transition-all duration-300`}
      >
        <ul
          className={` ${
            isClicked === true
              ? "flex flex-col space-y-5 text-white "
              : "hidden"
          }  sm:hidden `}
        >
          <li>
            <a href="#Home" onClick={handleNavLinkClick}>
              Home{" "}
            </a>
          </li>
          <li>
            <a href="#Services" onClick={handleNavLinkClick}>
              Services{" "}
            </a>
          </li>
          <li>
            <a href="#About" onClick={handleNavLinkClick}>
              About{" "}
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={handleNavLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
