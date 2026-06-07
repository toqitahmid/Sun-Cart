import Marquee from "react-fast-marquee";
import nike from '../../../assets/nike.png'
import addidas from '../../../assets/addidas.png'
import gucci from '../../../assets/gucci.png'
import luisevitton from "../../../assets/luicevitton.png";
import Image from "next/image";

const brands = [nike, addidas, gucci, luisevitton];
const BrandMarquee = () => {
    return (
        <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto my-20">
            <Marquee pauseOnHover={true} speed={80}>
                {
                    brands.map((brand,index) => (
                        <span key={index} className="">
                            <Image
                            src={brand}
                            alt={brand}
                            width={200}
                            height={200}
                            className="lg:w-40 md:w-40 w-30  lg:mx-30 md:mx-25 mx-10"
                            ></Image>
                        </span>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default BrandMarquee;