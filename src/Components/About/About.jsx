import React from "react";

const About = () => {
  return (
    <div
      className="w-auto flex flex-col justify-center items-center m-[2em] p-4 "
      id="About"
      style={{ backgroundColor: "var(--neutralDark)" }}
    >
      <h1 className="font-bold text-[2rem] mt-10 mb-10" style={{ color: "var(--accent)" }}>
        About Us – Infinity Techno Engineering (ITE)
      </h1>
      <div className="text-[1.2rem] mt-4 w-[80%] text-justify leading-10 ">
        <h3
          className="font-bold text-[1.3rem]"
          style={{ color: "var(--accent)" }}
        >
          One Stop Solution for Industrial Excellence{" "}
        </h3>
        <p>
          At <b>Infinity Techno Engineering (ITE) </b>, we are dedicated to
          delivering reliable and innovative industrial solutions across a wide
          range of sectors. With a focus on both electrical and mechanical
          engineering services, we pride ourselves on being a comprehensive
          provider of sales, services, and technical support for industrial
          automation and equipment systems.
        </p>
      </div>
      <div className="text-[1.2rem] mt-4 w-[80%] text-justify leading-10 ">
        <h3
          className="font-bold text-[1.3rem]"
          style={{ color: "var(--accent)" }}
        >
          Who we are
        </h3>
        <p>
          Founded with a mission to bring precision and professionalism to the
          industrial services domain, Infinity Techno Engineering is a dynamic
          company that combines cutting-edge technology with years of hands-on
          expertise. Led by <b> Mr. N. Arul Raj </b>, our Head of Operations, we
          continue to grow as a trusted name in the field of automation,
          equipment servicing, and technical support.
        </p>
      </div>

      <div className="text-[1.2rem] mt-4 w-[80%] text-justify leading-13 ">
        <h3
          className="font-bold text-[1.3rem]"
          style={{ color: "var(--accent)" }}
        >
          Why choose Us?{" "}
        </h3>
        <div className="flex  justify-around items-center ">
          <div className="border-r-2" style={{ borderColor: "var(--accent)" }}>
            <ul className="mr-15 pr-25">
              <li> ✅ Customer-Centric Approach</li>
              <li> ✅ Skilled and Experienced Technicians</li>
              <li> ✅ Customized Automation and Fabrication Solutions </li>
            </ul>
          </div>
          <div>
            <ul>
              <li> ✅ Fast Turnaround and Reliable Service</li>
              <li> ✅ End-to-End Industrial Support</li>
              <li> ✅ Proven Track Record of Success</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-[1.2rem] mt-4 w-[80%] text-justify leading-10 ">
        <h3
          className="font-bold text-[1.3rem]"
          style={{ color: "var(--accent)" }}
        >
          Our Vision
        </h3>
        <p>
          To be the most reliable and innovative service provider in the field
          of industrial engineering, delivering sustainable, safe, and efficient
          solutions to clients across Tamil Nadu and beyond.
        </p>
      </div>

      <div className="text-[1.2rem] mt-4 w-[80%] text-justify leading-13 ">
        <h3
          className="font-bold text-[1.3rem]"
          style={{ color: "var(--accent)" }}
        >
          Our Mission{" "}
        </h3>
        <div className="ml-20">
        
            <ul >
              <li> ✅ To deliver high-quality engineering services</li>
              <li> ✅ To ensure minimal downtime and maximum productivity for our clients</li>
              <li> ✅ To embrace modern technology in automation and equipment services</li>
              <li> ✅ To foster long-term relationships with our partners and customers</li>
            </ul>
          
        </div>
      </div>
    </div>
  );
};

export default About;
