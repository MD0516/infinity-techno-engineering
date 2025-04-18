import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col m-4 sm:m-[2em] p-4"
      id="About"
      style={{ backgroundColor: "var(--neutralDark)" }}
    >
      <h1
        className="font-bold text-2xl mt-5 mb-5 text-center sm:text-[2rem] sm:mt-10 sm:mb-10"
        style={{ color: "var(--accent)" }}
      >
        About Us – Infinity Techno Engineering (ITE)
      </h1>

      {/* Section: One Stop Solution */}
      <div className="text-[1.2rem] mt-4 p-3 text-justify leading-10">
        <h3 className="font-bold text-[1.3rem]" style={{ color: "var(--accent)" }}>
          One Stop Solution for Industrial Excellence
        </h3>
        <p>
          At <b>Infinity Techno Engineering (ITE)</b>, we are dedicated to
          delivering reliable and innovative industrial solutions across a wide
          range of sectors. With a focus on both electrical and mechanical
          engineering services, we pride ourselves on being a comprehensive
          provider of sales, services, and technical support for industrial
          automation and equipment systems.
        </p>
      </div>

      {/* Section: Who We Are */}
      <div className="text-[1.2rem] mt-4 p-3 text-justify leading-10">
        <h3 className="font-bold text-[1.3rem]" style={{ color: "var(--accent)" }}>
          Who We Are
        </h3>
        <p>
          Founded with a mission to bring precision and professionalism to the
          industrial services domain, Infinity Techno Engineering is a dynamic
          company that combines cutting-edge technology with years of hands-on
          expertise. Led by <b>Mr. N. Arul Raj</b>, our Head of Operations, we
          continue to grow as a trusted name in the field of automation,
          equipment servicing, and technical support.
        </p>
      </div>

      {/* Section: Why Choose Us */}
      <div className="text-[1.2rem] mt-4 p-3  leading-10">
        <h3 className="font-bold text-[1.3rem]" style={{ color: "var(--accent)" }}>
          Why Choose Us?
        </h3>
        <ul className="list-none space-y-2 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          <li className="relative pl-8 before:content-['✅'] before:absolute before:left-0"> Customer-Centric Approach</li>
          <li className="relative pl-8 before:content-['✅'] before:absolute before:left-0"> Skilled and Experienced Technicians</li>
          <li className="relative pl-8 before:content-['✅'] before:absolute before:left-0"> Customized Automation and Fabrication Solutions</li>
          <li className="relative pl-8 before:content-['✅'] before:absolute before:left-0"> Fast Turnaround and Reliable Service</li>
          <li className="relative pl-8 before:content-['✅'] before:absolute before:left-0"> End-to-End Industrial Support</li>
          <li className="relative pl-8 before:content-['✅'] before:absolute before:left-0"> Proven Track Record of Success</li>
        </ul>
      </div>

      {/* Section: Vision */}
      <div className="text-[1.2rem] mt-4 p-3 text-justify leading-10">
        <h3 className="font-bold text-[1.3rem]" style={{ color: "var(--accent)" }}>
          Our Vision
        </h3>
        <p>
          To be the most reliable and innovative service provider in the field
          of industrial engineering, delivering sustainable, safe, and efficient
          solutions to clients across Tamil Nadu and beyond.
        </p>
      </div>

      {/* Section: Mission */}
      <div className="text-[1.2rem] mt-4 p-3 text-left leading-10">
        <h3 className="font-bold text-[1.3rem]" style={{ color: "var(--accent)" }}>
          Our Mission
        </h3>
        <ul className="space-y-2 md:grid md:grid-cols-2 md:gap-4 ">
          <li className="relative pl-8 before:content-['✅'] before:absolute before:left-0"> To deliver high-quality engineering services</li>
          <li className="relative pl-8 before:content-['✅'] before:absolute before:left-0"> To ensure minimal downtime and maximum productivity for our clients</li>
          <li className="relative pl-8 before:content-['✅'] before:absolute before:left-0"> To embrace modern technology in automation and equipment services</li>
          <li className="relative pl-8 before:content-['✅'] before:absolute before:left-0"> To foster long-term relationships with our partners and customers</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
