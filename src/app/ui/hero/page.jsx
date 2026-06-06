import Image from "next/image";
import banner from '@/assets/banner.png'

const Hero = () => {
    return (
        <div className="">
            <Image
            src={banner} 
            alt="hero banner"
            width={1200}
            height={50}
            className="object-cover w-full"
            ></Image>
        </div>
    );
};

export default Hero;