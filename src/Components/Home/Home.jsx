import React from 'react'
import gear from '../../assets/homeIcons/gear.svg'
import lightning from '../../assets/homeIcons/lightning.svg'
import phone from '../../assets/homeIcons/phone.svg'
import tools from '../../assets/homeIcons/tools.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id="Home" className='pt-14'>
        <div className=' '>
            <div className='pt-10'  style={{ backgroundColor: "var(--primary)" }}>
                <div className='flex flex-col justify-center items-center md:flex-row'>
                    <div className='space-y-5 md:w-[80%] '>
                        <h1  className='text-white text-[22px] m-5   md:text-4xl md:leading-14 lg:text-6xl lg:leading-18 font-bold'>Reliable Industrial Engineering Solutions – All Under One Roof</h1>
                        <p className='text-white text-[18px]  m-5 md:text-3xl'>Empowering industries with expert support in automation, electrical, hydraulic, and mechanical systems.</p>
                    </div>
                    <div className='flex flex-row mb-5 md:flex-col justify-center items-center'>
                        <a href='#Services' className='bg-white p-3 m-5 rounded-[8px] font-bold text-[var(--secondary)] hover:text-white hover:bg-[var(--secondary)] hover:cursor-pointer'  > Explore Services </a> 
                        <a href='#Contact' className='bg-white p-3 m-5 rounded-[8px] font-bold text-[var(--secondary)] hover:text-white hover:bg-[var(--secondary)] hover:cursor-pointer'> Get in Touch </a>
                    </div>
                </div>
            </div>
            <div className=' m-2 p-2 sm:m-5 sm:p-3 lg:m-7 lg:p-5 flex flex-col justify-center items-center'>
                <p className=' sm:text-[1.8rem] text-justify leading-relaxed font-medium'>Infinity Techno Engineering is your one-stop solution for automation projects, actuator maintenance, spares supply, and complete industrial support systems.</p>
                <div className='flex flex-col sm:grid sm:grid-cols-4 gap-5 mt-10'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={gear} alt="gear-icon" className='w-20 h-20' />
                        <p className='font-medium p-2'>10+ Years of Engineering Expertise</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'> 
                        <img src={lightning} alt="gear-icon" className='w-20 h-20' />
                        <p className='font-medium p-2'>Specialized in PLC & Labview Automation</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'> 
                        <img src={tools} alt="gear-icon" className='w-20 h-20' />
                        <p className='font-medium p-2'>Comprehensive Hydraulic & Pneumatic Support</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={phone} alt="gear-icon" className='w-20 h-20' />
                        <p className='font-medium p-2'>Fast Technical Support & On-Site Service</p>
                    </div>
                </div>

            </div>

            <div className='flex flex-col justify-evenly items-center mt-10 space-y-8 m-2 p-3 sm:m-5 sm:p-3 lg:m-7 lg:p-5 '>
                <div className='  text-justify sm:text-[1.3rem] font-medium'>
                    At Infinity Techno Engineering, we combine precision, speed, and reliability to serve industries across Tamil Nadu. From actuator repairs to custom fabrication, we deliver excellence in every project. 
                </div>  
            
                <a href='#About' className='w-fit p-3 m-5 sm:m-4 sm:p-4 rounded-[8px] font-bold text-[var(--accent)] bg-[var(--neutralDark)] hover:text-white hover:bg-[var(--primary)] hover:cursor-pointer'> Learn more about Us </a>
                
            </div>

            <div className=' flex flex-col justify-center items-center m-2 p-3 sm:m-5 sm:p-3'>
                <h3 className="font-bold text-[1.3rem] text-justify" style={{ color: "var(--accent)" }}>Our Major Serving industries in manufacturing, automation, power, and engineering with tailored solutions.</h3>
                <div className='grid grid-flow-row grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-5 mt-10'>  
                    <div className='w-30 h-20 bg-black text-white  text-center p-7'>Logo</div>
                    <div className='w-30 h-20 bg-black text-white  text-center p-7'>Logo</div>
                    <div className='w-30 h-20 bg-black text-white  text-center p-7'>Logo</div>
                    <div className='w-30 h-20 bg-black text-white  text-center p-7'>Logo</div>
                    <div className='w-30 h-20 bg-black text-white  text-center p-7'>Logo</div>
                    <div className='w-30 h-20 bg-black text-white  text-center p-7'>Logo</div>
                    <div className='w-30 h-20 bg-black text-white  text-center p-7'>Logo</div>
                    <div className='w-30 h-20 bg-black text-white  text-center p-7'>Logo</div>
                    <div className='w-30 h-20 bg-black text-white  text-center p-7'>Logo</div>
                    <div className='w-30 h-20 bg-black text-white  text-center p-7'>Logo</div>
                    <div className='w-30 h-20 bg-black text-white  text-center p-7'>Logo</div>
                    <div className='w-30 h-20 bg-black text-white  text-center p-7'>Logo</div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Home