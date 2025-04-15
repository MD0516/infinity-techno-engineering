import React, {useEffect, useState} from 'react'
import ite_h from '../../assets/ite_h.svg'



const Navbar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

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

    window.addEventListener('scroll', throttled);

    return () => {
      window.removeEventListener('scroll', throttled);
    };
  }, [prevScrollPos]);

  const handleNavLinkClick = () =>{
    setVisible(false);
  }

  return (
    <div className={`transition-all duration-300 ${visible ? 'top-0' : '-top-20'} fixed w-full z-[999] border-b-20 border-[var(--primary)] rounded-xl`}id='NB'>
        <nav className='w-full p-4 flex justify-between items-center h-16  text-white ' style={{ backgroundColor: 'var(--primary)' }}>
          <div className='flex items-center space-x-2'>
            <a href='#'><img src={ite_h} alt="logo" className='w-16 h-16 cursor-pointer' /> </a>
            <a href="#" className='font-black'>
                <h1 className='text-[1.5rem] inline'>Infinity Techno Engineering</h1>
            </a>
          </div>
            <div className="list">
                <ul className='flex space-x-4'>
                    <li><a href='#Home' onClick={handleNavLinkClick}>Home </a></li>
                    <li><a href='#Services' onClick={handleNavLinkClick}>Services </a></li>
                    <li><a href='#About' onClick={handleNavLinkClick}>About </a></li>
                    <li><a href='#Contact' onClick={handleNavLinkClick}>Contact</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar