import React from "react";
import lPin from "../../assets/Contact/lPin.svg";

const Contact = () => {
  return (
    <div
      className="sm:text-[1.2rem] max-w-full  sm:m-[2rem] m-4 flex flex-col justify-center items-center p-4"
      id="Contact"
      style={{ backgroundColor: "var(--neutralDark)" }}
    >
      <h1
        className="text-[2rem] mt-10 mb-10 font-bold"
        style={{ color: "var(--accent)" }}
      >
        Contact Us
      </h1>

      <div className="flex flex-col sm:flex-row justify-evenly w-full mt-4">
        <div className="sm:text-[1.2rem]  sm:text-justify leading-10 m-auto ">
          <h3
            className="font-bold text-[1.3rem] text-center p-3 leading-10 "
            style={{ color: "var(--accent)" }}
          >
            {" "}
            Contact Info{" "}
          </h3>
          <ul className="list-none space-y-2">
            <li className="relative pl-8 before:content-['📍'] before:absolute before:left-0 ">
              {" "}
              No.10/214, Kamachi Puram, <br /> Athanacherry, Padappai, <br />{" "}
              Tamil Nadu - 601 301
            </li>
            <li className="relative pl-8 before:content-['📞'] before:absolute before:left-0">
              {" "}
              78717 45437
            </li>
            <li className="relative pl-8 before:content-['📧'] before:absolute before:left-0">
              {" "}
              infinitytechnoengg@gmail.com
            </li>
            <li className="relative pl-8 before:content-['⏰'] before:absolute before:left-0">
              {" "}
              10:00 AM - 10:00 PM
            </li>
          </ul>
        </div>

        <div
          className="lg:pr-40 p-3 space-y-5 text-center flex flex-col justify-center sm:border-l-2 sm:w-1/2 "
          style={{ borderColor: "var(--accent)" }}
        >
          <h3
            className="font-bold text-[1.3rem]"
            style={{ color: "var(--accent)" }}
          >
            Contact Form
          </h3>
          <form
            className="space-y-5"
            action="https://script.google.com/macros/s/AKfycbzA758qjpj7kEx3IV-lcaBgCWn4dyU3rwejRTdxs3Zf60qMULioL43O8YBzdFzFVJOq/exec"
            method="POST"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <label
                htmlFor="name"
                className="w-full sm:w-1/4 font-semibold mb-1 sm:mb-0"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                className="w-full sm:flex-1 rounded-[3px] p-3"
                style={{ outline: "2px solid var(--accent)" }}
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <label
                htmlFor="phone"
                className="w-full  sm:w-1/4 font-semibold mb-1 sm:mb-0"
              >
                Phone No.
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your Phone No."
                className="w-full sm:flex-1 rounded-[3px] p-3"
                style={{ outline: "2px solid var(--accent)" }}
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <label
                htmlFor="email"
                className="w-full sm:w-1/4 font-semibold mb-1 sm:mb-0"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your e-mail"
                className="w-full sm:flex-1 rounded-[3px] p-3"
                style={{ outline: "2px solid var(--accent)" }}
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
              <label
                htmlFor="message"
                className="w-full sm:w-1/4 font-semibold mb-1 sm:mb-0"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full sm:flex-1 rounded-[3px] p-3"
                style={{ outline: "2px solid var(--accent)" }}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center sm:text-left mt-4">
              <button
                type="submit"
                className="p-3 rounded-[3px] hover:bg-[var(--accent)] hover:text-white"
                style={{ outline: "2px solid var(--accent)" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="h-50 bg-white p-20   mt-4">
        <p className="m-auto pl-20">LOCATION</p>
      </div>
    </div>
  );
};

export default Contact;
