import Image from "next/image";

const Hero = () => {
    return (
      <div className="">
        <Image
          src="https://i.ibb.co.com/Q36hx2RT/banner.png"
          alt="hero banner"
          width={1200}
          height={50}
          className="object-cover w-full"
        ></Image>
      </div>
    );
};

export default Hero;