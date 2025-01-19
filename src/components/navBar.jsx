
import logo from '../images/logo.svg';
import mobileImageHeader from '../images/mobile/image-header.jpg'
import desktopImageHeader from '../images/desktop/image-header.jpg';
import iconArrowDown from '../images/icon-arrow-down.svg';
import hamburgherIcon from '../images/icon-hamburger.svg';
import { useEffect, useRef, useState } from 'react';


const NavBar = () => {
  const [openMobileMenu,setOpenMobileMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = (event) =>{
      event.stopPropagation();
      setOpenMobileMenu(!openMobileMenu);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMobileMenu(false);
      }
    };
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

    return (
      <>
      <div className="relative h-[710px] overflow-hidden">
        <picture className="absolute top-0 w-full h-full z-[-1]">
          <source media="(max-width:768px)" srcSet={mobileImageHeader} />
          <img className="block w-full h-full object-cover" src={desktopImageHeader} alt="background" />
        </picture>
        <div  className="z-10 px-7 sm:px-16 py-7 mb-20">
          <div className="flex justify-between items-center">
            <div>
              <img className="block object-cover h-auto" src={logo} alt="logo" />
            </div>
            <div className='md:block hidden'>
              <ul className="flex items-center gap-11 text-white font-semibold text-lg">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li>
                  <button className="bg-white rounded-[30px] text-base font-Fraunces font-bold text-neutral-veryDarkBlue uppercase px-6 py-[.9rem]">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
             {/*Mobile Hamburgher*/}
            <div className='md:hidden block'>
                  <button onClick={toggleMobileMenu}>
                      <img src={hamburgherIcon} alt="navbar mobile menu"/>
                  </button>
            </div>
          </div>
        </div>
        <div className='z-10'>
          <h1 className="text-white uppercase text-center text-4xl sm:text-6xl font-bold font-Fraunces tracking-[.7rem] mb-20">
            We Are Creatives
          </h1>
          <button className="block m-auto">
            <img src={iconArrowDown} alt="See more content" />
          </button>
        </div>
      {/* Mobile Menu */}
{
  openMobileMenu && (
    <div  ref={menuRef} className='absolute top-[15%] pt-8 left-[8%] z-20 bg-white w-[83%] h-[50%]'>
      {/* Triangle pointing to the hamburger menu */}
      <div 
        className="absolute -top-[10%] left-[82.6%] w-[55px] h-14 bg-white" 
        style={{
          clipPath: 'polygon(100% 2%, 100% 100%, 23% 100%)',
        }}
      ></div>
      <ul className="p-8 flex flex-col items-center gap-8 text-neutral-veryDarkBlue font-semibold text-2xl">
        <li className='opacity-70'><a href="#">About</a></li>
        <li className='opacity-70'><a href="#">Services</a></li>
        <li className='opacity-70'><a href="#">Projects</a></li>
        <li>
          <button className="bg-primary-yellow hover:bg-primary-yellowLight transition-bg duration-300 rounded-[30px] text-base font-Fraunces font-bold text-neutral-veryDarkBlue uppercase px-6 py-[.9rem]">
            Contact
          </button>
        </li>
      </ul>
    </div>
  )
}
      </div>
      </>
    );
  };
  
  export default NavBar;
  