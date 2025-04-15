import React from "react";
import lPin from "../../assets/Contact/lPin.svg";

const Contact = () => {
  return (
    <div
      className="w-auto  m-[2rem] flex flex-col justify-center items-center p-4"
      id="Contact"
      style={{ backgroundColor: "var(--neutralDark)" }}
    >
      <h1 className="text-[2rem] mt-10 mb-10 font-bold" style={{ color: "var(--accent)" }}>
        Contact Us
      </h1>

      <div className="flex flex-row justify-evenly w-full mt-4">
        <div className="text-[1.2rem] text-justify leading-10 m-auto">
          <h3
            className="font-bold text-[1.3rem] p-3 leading-10 "
            style={{ color: "var(--accent)" }}
          >
            {" "}
            Contact Info{" "}
          </h3>
          <ul className="list-none space-y-2">
            <li className="relative pl-8 before:content-['📍'] before:absolute before:left-0">
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

        <div className=" p-3 border-l-2 w-1/2 pl-50 " style={{ borderColor: "var(--accent)" }}>
          <h3
            className="font-bold text-[1.3rem]"
            style={{ color: "var(--accent)" }}
          >
            Contact Form
          </h3>
          <form action="https://getform.io/f/adrnwqqa" method="POST">
            <div className="space-y-4 mt-4">
              <div>
                <label htmlFor="name" className="block font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your Name"
                  name="name"
                  className="outline-solid rounded-[3px] w-[60%] p-3"
                  style={{ outline: "2px solid var(--accent)" }}
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="block font-semibold">
                  Phone No.
                </label>
                <input
                  type="number"
                  id="Phone"
                  placeholder="Enter your Phone No."
                  name="Phone"
                  className="outline-solid rounded-[3px] w-[60%] p-3"
                  style={{ outline: "2px solid var(--accent)" }}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your e-mail"
                  name="email"
                  className="outline-solid rounded-[3px] w-[60%] p-3"
                  style={{ outline: "2px solid var(--accent)" }}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  name="message"
                  className="outline-solid rounded-[3px] w-[60%] p-3"
                  style={{ outline: "2px solid var(--accent)" }}
                  required
                />
              </div>
              <div className="w-[60%] text-center mt-4">
                <button
                  type="submit"
                  name="submit"
                  className="w-[50%] p-3 outline-solid rounded-[3px] hover:bg-[var(--accent)] hover:text-white"
                  style={{ outline: "2px solid var(--accent)" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="h-50 w-100 bg-white p-20   mt-4">
        <p className="m-auto pl-20">LOCATION</p>
      </div>
    </div>
  );
};

export default Contact;
