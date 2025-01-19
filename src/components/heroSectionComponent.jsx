import React from 'react';

const HeroSection = ({ title, description, buttonLabel, buttonColor, imageSrcDesktop, imageSrcMobile, imageAlt, isTextLeft }) => {
  return (
    <article className="md:h-[550px] h-[850px] overflow-hidden grid md:grid-cols-2">

    <picture className={`
      ${isTextLeft 
        ? 'transform-brand-picture md:col-start-2 md:row-start-1' 
        : 'stand-out-picture md:col-start-1 md:row-start-1'

      }`}>
      <source media="(max-width: 768px)" srcSet={imageSrcMobile} />
      <img src={imageSrcDesktop} alt={imageAlt} />
    </picture>

      {/* Text Section */}
      <div
        className={`flex flex-col justify-center md:p-[5rem] p-6 max-w-[610px] md:text-left text-center ${
          isTextLeft ? 'md:col-start-1 md:row-start-1' : 'md:col-start-2 md:row-start-1'
        } row-start-2`}
      >
        <h2 className="md:text-5xl text-4xl font-extrabold text-neutral-veryDarkBlue mb-8">
          {title}
        </h2>
        <p className="opacity-70 text-lg font-medium text-neutral-veryDarkBlue mb-8">
          {description}
        </p>
        <div className='flex justify-center md:justify-start'>
        <button
          className={`flex items-center justify-center w-fit relative font-Fraunces uppercase font-extrabold text-base text-center group`}
        >
          <span className="relative z-[10]">{buttonLabel}</span>
          <div
            className={`absolute h-[40%] top-[60%] w-[110%] rounded-[30px] ${buttonColor} opacity-35 transition-opacity duration-100 group-hover:opacity-100 z-[0]`}
          ></div>
        </button>
        </div>
      </div>
    </article>
  );
};

export default HeroSection;