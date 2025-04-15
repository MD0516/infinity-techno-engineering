import React from 'react'
import gear from '../../assets/homeIcons/gear.svg'
import lightning from '../../assets/homeIcons/lightning.svg'
import phone from '../../assets/homeIcons/phone.svg'
import tools from '../../assets/homeIcons/tools.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id="Home" className='mt-20'>
        <div className=' w-full '>
            <div  style={{ backgroundColor: "var(--primary)" }}>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                        <h1  className='text-white text-[3rem] font-bold mt-5 mr-5 ml-5 mb-1 pt-5 pr-5 pb-1 pl-5'>Reliable Industrial Engineering <br /> Solutions – All Under One Roof</h1>
                        <p className='text-white text-[1.3rem] m-5 mt-1 mr-5 ml-5 mb-5 pt-1 pr-5 pb-5 pl-5'>Empowering industries with expert support in automation, <br /> electrical, hydraulic, and mechanical systems.</p>
                    </div>
                    <div>
                        <a href='#Services' className='bg-white p-5 m-5 rounded-[8px] font-bold text-[var(--secondary)] hover:text-white hover:bg-[var(--secondary)] hover:cursor-pointer'  > Explore Services </a>
                        <a href='#Contact' className='bg-white p-5 m-5 rounded-[8px] font-bold text-[var(--secondary)] hover:text-white hover:bg-[var(--secondary)] hover:cursor-pointer'> Get in Touch </a>
                    </div>
                </div>
            </div>
            <div className=' m-5 p-5 flex flex-col justify-center items-center'>
                <p className='w-[70%] text-[1.8rem] font-medium'>Infinity Techno Engineering is your one-stop solution for automation projects, actuator maintenance, spares supply, and complete industrial support systems.</p>
                <div className='grid grid-cols-4 gap-5 mt-10'>
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

            <div className='flex flex-row justify-evenly items-center mt-10'>
                <div className='w-[70%] text-[1.3rem] font-medium'>
                    At Infinity Techno Engineering, we combine precision, speed, and reliability to serve industries across Tamil Nadu. From actuator repairs to custom fabrication, we deliver excellence in every project. 
                </div>  
                <div >
                <a href='#About' className='w-fit p-5 m-5 mt-10 rounded-[8px] font-bold text-[var(--accent)] bg-[var(--neutralDark)] hover:text-white hover:bg-[var(--primary)] hover:cursor-pointer'> Learn more about Us </a>
                </div>
            </div>

            <div className='w-full flex flex-col justify-center items-center mt-10 mb-10'>
                <h3 className="font-bold text-[1.3rem]" style={{ color: "var(--accent)" }}>Our Major Serving industries in manufacturing, automation, power, and engineering with tailored solutions.</h3>
                <div className='grid grid-cols-6 grid-flow-row gap-5 mt-10'>
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