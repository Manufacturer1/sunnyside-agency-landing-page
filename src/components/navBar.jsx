import logo from '../images/logo.svg';
import mobileImageHeader from '../images/mobile/image-header.jpg'
import desktopImageHeader from '../images/desktop/image-header.jpg';
import iconArrowDown from '../images/icon-arrow-down.svg';

const NavBar = () => {
    return (
      <div className="relative h-[710px] overflow-hidden">
        <picture className="absolute top-0 w-full h-full z-[-1]">
          <source media="(max-width:768px)" srcSet={mobileImageHeader} />
          <img className="block w-full h-full object-cover" src={desktopImageHeader} alt="background" />
        </picture>
        <div className="z-10 px-16 py-7 mb-20">
          <div className="flex justify-between items-center">
            <div>
              <img className="block object-cover w-auto h-auto" src={logo} alt="logo" />
            </div>
            <div>
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
          </div>
        </div>
        <div>
          <h1 className="text-white uppercase text-center text-6xl font-bold font-Fraunces tracking-[.7rem] mb-20">
            We Are Creatives
          </h1>
          <button className="block m-auto">
            <img src={iconArrowDown} alt="See more content" />
          </button>
        </div>
      </div>
    );
  };
  
  export default NavBar;
  