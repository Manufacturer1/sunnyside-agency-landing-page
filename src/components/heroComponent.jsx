import React from 'react';
import HeroSection from './heroSectionComponent';
import ImageSection from './imageSectionComponent';

import mobileImageTransform from '../images/mobile/image-transform.jpg';
import desktopImageTransform from '../images/desktop/image-transform.jpg';
import desktopImageStandout from '../images/desktop/image-stand-out.jpg';
import mobileImageStandout from '../images/mobile/image-stand-out.jpg';
import desktopGraphicDesignImage from '../images/desktop/image-graphic-design.jpg';
import mobileGraphicDesignImage from '../images/mobile/image-graphic-design.jpg';
import desktopPhotographyImage from '../images/desktop/image-photography.jpg';
import mobilePhotographyImage from '../images/mobile/image-photography.jpg';

const Hero = () => {
  return (
    <section>
      <HeroSection
        title="Transform your brand"
        description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        buttonLabel="Learn More"
        buttonColor="bg-primary-yellow"
        imageSrcDesktop={desktopImageTransform}
        imageSrcMobile={mobileImageTransform}
        imageAlt="Yellow background with an egg"
        isTextLeft={true}
      />

      <HeroSection
        title="Stand out to the right audience"
        description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        buttonLabel="Learn More"
        buttonColor="bg-primary-softRed"
        imageSrcDesktop={desktopImageStandout}
        imageSrcMobile={mobileImageStandout}
        imageAlt="Red background with a cup"
        isTextLeft={false}
      />

      <section className="h-[550px] overflow-hidden grid grid-cols-2">
        <ImageSection
          title="Graphic Design"
          description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          textColor="text-primary-graphicDesignText"
          imageSrcDesktop={desktopGraphicDesignImage}
          imageSrcMobile={mobileGraphicDesignImage}
          imageAlt="Light green background with cherries"
          customClassName="graphic-design-picture"
        />

        <ImageSection
          title="Photography"
          description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          textColor="text-primary-photographyText"
          imageSrcDesktop={desktopPhotographyImage}
          imageSrcMobile={mobilePhotographyImage}
          imageAlt="Light cyan background with orange"
          customClassName="photography-picture"
        />
      </section>
    </section>
  );
};

export default Hero;
