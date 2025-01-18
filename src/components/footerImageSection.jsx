
const FooterImageSection = ({desktopImage,mobileImage}) =>{
    
    return(
    <picture>
        <source media="(max-width: 768px)" srcSet={mobileImage} />
        <img className="object-cover w-full h-full block" src={desktopImage} alt='footer image'/>
    </picture>
    )
};

export default FooterImageSection;