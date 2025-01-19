import NavBar from "./components/navBar";
import Hero from "./components/heroComponent";
import Testimonial from "./components/testimonialComponent";
import FooterImageSection from "./components/footerImageSection";
import Footer from "./components/footerComponent";
import emilyAvatarIcon from './images/image-emily.jpg';
import thomasAvatarIcon from './images/image-thomas.jpg';
import jennieAvatarIcon from './images/image-jennie.jpg';
import desktopImageMilk from './images/desktop/image-gallery-milkbottles.jpg';
import mobileImageMilk from './images/mobile/image-gallery-milkbottles.jpg';
import desktopImageOrange from './images/desktop/image-gallery-orange.jpg';
import mobileImageOrange from './images/mobile/image-gallery-orange.jpg';
import desktopImageCon from './images/desktop/image-gallery-cone.jpg';
import mobileImageCon from './images/mobile/image-gallery-cone.jpg';
import desktopImageSugar from './images/desktop/image-gallery-sugarcubes.jpg';
import mobileImageSugar from './images/mobile/image-gallery-sugar-cubes.jpg';


function App() {

  const testimonials = [
    {
      icon:emilyAvatarIcon,
      comment:'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      name:'Emily R.',
      post:'Marketing Director'
    },
    {
      icon:thomasAvatarIcon,
      comment:'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
      name:'Thomas S.',
      post:'Chief Operating Officer'
    },
    {
      icon:jennieAvatarIcon,
      comment:'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      name:'Jennie F.',
      post:'Business Owner'
    }
  ];
  const footerImages = [
    {
      mobileImage:mobileImageMilk,
      desktopImage:desktopImageMilk
    },
    {
      mobileImage:mobileImageOrange,
      desktopImage:desktopImageOrange
    },
    {
      mobileImage:mobileImageCon,
      desktopImage:desktopImageCon
    },
    {
      mobileImage:mobileImageSugar,
      desktopImage:desktopImageSugar
    }
  ];

  return (
    <>
      <div>
        <NavBar />
      </div>
        <div>
          <Hero/>
      </div>
      <div className="md:h-[600px] py-16 md:py-32">
          <h1 className="text-center md:text-2xl text-xl font-bold font-Fraunces uppercase text-neutral-grayishBlue tracking-widest mb-16">Client Testimonials</h1>
          <div className="flex flex-col md:flex-row gap-16 md:gap-10 justify-center items-center">
             {
              testimonials.map((testimonal,index) =>{
                  return(
                    <Testimonial
                      key={index}
                      profileIcon={testimonal.icon}
                      comment={testimonal.comment}
                      author={testimonal.name}
                      post={testimonal.post}
                    />
                  )
              })
             }
          </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 max-h-[550px] overflow-hidden">
            {
              footerImages.map((section,index) =>{
                return(
                  <FooterImageSection
                    key={index}
                    mobileImage={section.mobileImage}
                    desktopImage={section.desktopImage}
                  />
                )
              })
            }
      </div>
      <div>
          <Footer/>
      </div>
    </>
  );
}

export default App;

