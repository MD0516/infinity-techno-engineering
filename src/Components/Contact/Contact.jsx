import React, { useState } from "react";
import lPin from "../../assets/Contact/lPin.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbzA758qjpj7kEx3IV-lcaBgCWn4dyU3rwejRTdxs3Zf60qMULioL43O8YBzdFzFVJOq/exec";

    const form = new FormData();
    form.append("name", formData.name);
    form.append("phone", formData.phone);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setShowPopup(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit. Try again later.");
    }
  };

  return (
    <div
      className="sm:text-[1.2rem] max-w-full sm:m-[2rem] m-4 flex flex-col justify-center items-center p-4"
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
        <div className="sm:text-[1.2rem] sm:text-justify leading-10 m-auto">
          <h3
            className="font-bold text-[1.3rem] text-center p-3 leading-10"
            style={{ color: "var(--accent)" }}
          >
            Contact Info
          </h3>
          <ul className="list-none space-y-2">
            <li className="relative pl-8 before:content-['📍'] before:absolute before:left-0">
              No.10/214, Kamachi Puram, <br />
              Athanacherry, Padappai, <br />
              Tamil Nadu - 601 301
            </li>
            <li className="relative pl-8 before:content-['📞'] before:absolute before:left-0">
              78717 45437
            </li>
            <li className="relative pl-8 before:content-['📧'] before:absolute before:left-0">
              infinitytechnoengg@gmail.com
            </li>
            <li className="relative pl-8 before:content-['⏰'] before:absolute before:left-0">
              10:00 AM - 10:00 PM
            </li>
          </ul>
        </div>

        <div
          className="lg:pr-40 p-3 space-y-5 text-center flex flex-col justify-center sm:border-l-2 sm:w-1/2"
          style={{ borderColor: "var(--accent)" }}
        >
          <h3
            className="font-bold text-[1.3rem]"
            style={{ color: "var(--accent)" }}
          >
            Contact Form
          </h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
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
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="w-full sm:flex-1 rounded-[3px] p-3"
                style={{ outline: "2px solid var(--accent)" }}
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <label
                htmlFor="phone"
                className="w-full sm:w-1/4 font-semibold mb-1 sm:mb-0"
              >
                Phone No.
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone No."
                className="w-full sm:flex-1 rounded-[3px] p-3"
                style={{ outline: "2px solid var(--accent)" }}
                required
              />
            </div>

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
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your e-mail"
                className="w-full sm:flex-1 rounded-[3px] p-3"
                style={{ outline: "2px solid var(--accent)" }}
                required
              />
            </div>

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
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full sm:flex-1 rounded-[3px] p-3"
                style={{ outline: "2px solid var(--accent)" }}
                required
              />
            </div>

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

      <div className="h-50 bg-white p-20 mt-4">
        <p className="m-auto pl-20">LOCATION</p>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity flex items-center justify-center z-50">
        <div
          className="p-6 rounded-xl shadow-xl text-center backdrop-blur-md"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }} 
        >
            <h2 className="text-xl font-bold mb-2 text-green-600">Thank You!</h2>
            <p>Your message has been sent successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-[var(--accent)] text-white rounded hover:bg-opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
