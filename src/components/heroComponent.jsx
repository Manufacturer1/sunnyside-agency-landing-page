const Hero = () => {
    return (
      <div className="bg-white w-full py-[8rem] px-[12rem] relative">
        <h2 className="font-Fraunces text-neutral-veryDarkBlue text-4xl font-extrabold mb-7">
          Transform your brand
        </h2>
        <p className="text-base  text-neutral-veryDarkGrayishBlue mb-7">
          We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
          compelling visuals that do most of the marketing for you.
        </p>
        <button className="flex items-center justify-center relative font-Fraunces uppercase font-extrabold text-base text-center group">
          <span className="relative z-[10]">Learn More</span>
          <div className="absolute h-[40%] top-[60%] w-[110%] rounded-[30px] bg-primary-yellow opacity-35 transition-opacity duration-100 group-hover:opacity-100 z-[0]"></div>
        </button>
      </div>
    );
  };
  
  export default Hero;
  