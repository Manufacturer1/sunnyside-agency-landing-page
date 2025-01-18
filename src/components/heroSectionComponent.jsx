import React from 'react';

const HeroSection = ({ title, description, buttonLabel, buttonColor, imageSrcDesktop, imageSrcMobile, imageAlt, isTextLeft }) => {
  return (
    <article className="h-[550px] overflow-hidden grid grid-cols-2">
      {isTextLeft && (
        <div className="p-[5rem] max-w-[610px] flex flex-col justify-center ml-auto">
          <h2 className="text-5xl font-extrabold text-neutral-veryDarkBlue mb-8">{title}</h2>
          <p className="opacity-70 text-lg font-medium text-neutral-veryDarkBlue mb-8">{description}</p>
          <button
            className={`flex items-center justify-center w-fit relative font-Fraunces uppercase font-extrabold text-base text-center group`}
          >
            <span className="relative z-[10]">{buttonLabel}</span>
            <div
              className={`absolute h-[40%] top-[60%] w-[110%] rounded-[30px] ${buttonColor} opacity-35 transition-opacity duration-100 group-hover:opacity-100 z-[0]`}
            ></div>
          </button>
        </div>
      )}

      <picture className={`${isTextLeft ? 'transform-brand-picture' : 'stand-out-picture'}`}>
        <source media="(max-width: 768px)" srcSet={imageSrcMobile} />
        <img src={imageSrcDesktop} alt={imageAlt} />
      </picture>

      {!isTextLeft && (
        <div className="p-[5rem] max-w-[610px] flex flex-col justify-center mr-auto">
          <h2 className="text-5xl font-extrabold text-neutral-veryDarkBlue mb-8">{title}</h2>
          <p className="opacity-70 text-lg font-medium text-neutral-veryDarkBlue mb-8">{description}</p>
          <button
            className={`flex items-center justify-center w-fit relative font-Fraunces uppercase font-extrabold text-base text-center group`}
          >
            <span className="relative z-[10]">{buttonLabel}</span>
            <div
              className={`absolute h-[40%] top-[60%] w-[110%] rounded-[30px] ${buttonColor} opacity-35 transition-opacity duration-100 group-hover:opacity-100 z-[0]`}
            ></div>
          </button>
        </div>
      )}
    </article>
  );
};

export default HeroSection;
