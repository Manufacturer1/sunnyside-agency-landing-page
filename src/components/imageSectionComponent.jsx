import React from 'react';

const ImageSection = ({ 
  title, 
  description, 
  textColor, 
  imageSrcDesktop, 
  imageSrcMobile, 
  imageAlt, 
  customClassName 
}) => {
  return (
    <article className={`relative`}>
      <picture className={`${customClassName}`}>
        <source media="(max-width: 768px)" srcSet={imageSrcMobile} />
        <img src={imageSrcDesktop} alt={imageAlt} />
      </picture>
      <div
        className={`flex items-center justify-center flex-col w-[min(600px, 100%)] px-[2rem] absolute bottom-[10%] right-0 left-0 ${textColor} text-center`}
      >
        <h3 className="font-extrabold text-3xl mb-5">{title}</h3>
        <p className="text-lg font-medium max-w-[380px]">{description}</p>
      </div>
    </article>
  );
};

export default ImageSection;
