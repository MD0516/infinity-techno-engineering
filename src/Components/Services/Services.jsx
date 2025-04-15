import React from "react";
import electrical from "../../assets/Services/electrical.jpg";
import automation from "../../assets/Services/automation.jpg";  
import accumulator from "../../assets/Services/accumulator.jpg";
import fabrication from "../../assets/Services/fabrication.jpg";
import hydrualic from "../../assets/Services/hydrualic.jpg";
import mechanical from "../../assets/Services/mechanical.jpg";

const Services = () => {
  return (
    <div
      className="w-auto flex flex-col justify-center items-center m-[2em] p-4 mt-20"
      id="Services"
      style={{ backgroundColor: "var(--neutralDark)" }}
    >
      <h1
        className="font-bold text-[2rem] mt-10 mb-10"
        style={{ color: "var(--accent)" }}
      >
        Our Services
      </h1>
      <div className="text-[1.2rem] w-[80%] text-justify leading-10 ">
        <p>
          At <b>Infinity Techno Engineering </b>, we offer a comprehensive range of
          industrial services designed to meet the evolving needs of our
          clients. With a strong focus on quality, efficiency, and technical
          excellence, our services are backed by skilled professionals and
          cutting-edge tools. Whether it’s electrical spares, automation
          systems, hydraulic maintenance, or custom fabrication, we provide
          reliable solutions that ensure smooth and uninterrupted operations.
          Our goal is to deliver timely, cost-effective, and sustainable
          services across all sectors. <br />
          <b style={{ color: "var(--accent)" }}>Explore our core service offerings below: </b>
        </p>
      </div>

      <div className="grid grid-flow-row grid-cols-3 gap-4  w-[80%]">

    
        <div className="text-[1rem] mt-4 text-justify leading-10 border-2 p-3 rounded-[14px] hover:shadow-xl/30 hover:scale-105 transition-all duration-250 " style={{ borderColor: "var(--accent)" }}>
          <h4 className="font-bold text-[1.2rem] mb-2" style={{ color: "var(--accent)" }}> Electrical & Electronics services</h4>
          <div className="w-full flex justify-center items-center">
            <img src={electrical} alt="demo" className="w-[350px] h-[230px]"  />
          </div>
          <ul className="list-disc ml-10 mt-2">
            <li> Sales and servicing of electrical and electronic spare parts </li>
            <li> Troubleshooting and maintenance of electrical systems </li>
            <li> Upgrades and performance optimization </li>
          </ul>
        </div>
        
        <div className="text-[1rem] mt-4 text-justify leading-10 border-2 p-3 rounded-[14px] hover:shadow-xl/30 hover:scale-105 transition-all duration-250 " style={{ borderColor: "var(--accent)" }}>
          <h4 className="font-bold text-[1.2rem] mb-2" style={{ color: "var(--accent)" }}> Automation Solutions </h4>
          <div className="w-full flex justify-center items-center">
            <img src={automation} alt="demo" className="w-[350px] h-[230px]"  />
          </div>
          <ul className="list-disc ml-10 mt-2">
            <li> Design and implementation of PLC and LabVIEW projects </li>
            <li> Process automation and industrial control systems </li>
            <li> System integration for enhanced efficiency </li>
          </ul>
        </div>

        <div className="text-[1rem] mt-4 text-justify leading-10 border-2 p-3 rounded-[14px] hover:shadow-xl/30 hover:scale-105 transition-all duration-250 " style={{ borderColor: "var(--accent)" }}>
          <h4 className="font-bold text-[1.2rem] mb-2" style={{ color: "var(--accent)" }}> Hydraulic & Pneumatic Services </h4>
          <div className="w-full flex justify-center items-center">
            <img src={hydrualic} alt="demo" className="w-[350px] h-[230px]"  />
          </div>
          <ul className="list-disc ml-10 mt-2">
            <li> Repair and maintenance of hydraulic and pneumatic actuators </li>
            <li> Hydraulic equipment servicing </li>
            <li> System performance testing and fluid management </li>
          </ul>
        </div>

        <div className="text-[1rem] mt-4 text-justify leading-10 border-2 p-3 rounded-[14px] hover:shadow-xl/30 hover:scale-105 transition-all duration-250 " style={{ borderColor: "var(--accent)" }}>
          <h4 className="font-bold text-[1.2rem] mb-2" style={{ color: "var(--accent)" }}> Mechanical Equipment Maintenance </h4>
          <div className="w-full flex justify-center items-center">
            <img src={mechanical} alt="demo" className="w-[350px] h-[230px]"  />
          </div>
          <ul className="list-disc ml-10 mt-2">
            <li> Servicing of motors, pumps, drives, and gearboxes </li>
            <li> Cooling tower inspection and repair </li>
            <li> Mechanical alignment and efficiency checks </li>
          </ul>
        </div>

        <div className="text-[1rem] mt-4 text-justify leading-10 border-2 p-3 rounded-[14px] hover:shadow-xl/30 hover:scale-105 transition-all duration-250 " style={{ borderColor: "var(--accent)" }}>
          <h4 className="font-bold text-[1.2rem] mb-2" style={{ color: "var(--accent)" }}> Accumulator Gas Charging </h4>
          <div className="w-full flex justify-center items-center">
            <img src={accumulator} alt="demo" className="w-[350px] h-[230px]"  />
          </div>
          <ul className="list-disc ml-10 mt-2">
            <li> Gas charging for hydraulic accumulators </li>
            <li> Safety checks and performance tuning </li>
            <li> On-site and off-site support </li>
          </ul>
        </div>

        <div className="text-[1rem] mt-4 text-justify leading-10 border-2 p-3 rounded-[14px] hover:shadow-xl/30 hover:scale-105 transition-all duration-250 " style={{ borderColor: "var(--accent)" }}>
          <h4 className="font-bold text-[1.2rem] mb-2" style={{ color: "var(--accent)" }}> Custom Fabrication & Technical Support </h4>
          <div className="w-full flex justify-center items-center">
            <img src={fabrication} alt="demo" className="w-[350px] h-[230px]"  />
          </div>
          <ul className="list-disc ml-10 mt-2">
            <li> Fabrication of custom electrical and mechanical structures </li>
            <li> Welding, fitting, and on-demand component fabrication </li>
            <li> Technical consultation and field support services </li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Services;
