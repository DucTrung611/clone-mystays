import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../public/pexels-christian-heitz-285904-842711.jpg";
import image2 from "../../../public/pexels-maoriginalphotography-1485894.jpg";
import "swiper/css";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./style.css";
import Link from "next/link";
const SlickList = () => {
    const images = [image1, image2];
    return (
        <Swiper
            className="mx-auto"
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            loop={true}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Link href={"/"}>
                        <Image
                            src={image}
                            alt="picture nature"
                            className="w-full h-[480px]"
                        />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SlickList;
