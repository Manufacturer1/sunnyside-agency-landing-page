

const Testimonial = ({profileIcon,comment,author,post}) =>{
    return (
        <div className="max-w-[350px]">
            <div className="w-20 mb-10 m-auto">
                <img className="block object-cover w-full h-full rounded-full" src={profileIcon} alt='social icon' />
            </div>
            <div className="text-center">
                <p className="text-lg text-neutral-veryDarkBlue opacity-70 font-medium mb-10">{comment}</p>
                <h4 className="font-Fraunces font-extrabold text-lg">{author}</h4>
                <p className="text-neutral-grayishBlue">{post}</p>
            </div>
        </div>
    );
}

export default Testimonial;