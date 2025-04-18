"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

import img1 from "../../../public/img-beach.jpg";
import img2 from "../../../public/img-hotel1.jpg";
import logoHotel1 from "../../../public/logo-hotel1.png";

// Danh sách ảnh cho Swiper
const images = [img1, img2];

const AboutUs = () => {
    return (
        <>
            <div className="relative max-w-6xl mx-auto  content-center overflow-visible my-20 max-lg:hidden">
                {/* Swiper - Đồng bộ ảnh lớn & ảnh nhỏ */}
                <Swiper
                    slidesPerView={1}
                    navigation={true}
                    modules={[Navigation]}
                    loop={true}
                    className="w-full h-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="relative">
                            {/* Ảnh lớn */}
                            <div className="relative w-full h-[600px] ">
                                <Image
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="z-0 w-full"
                                />
                            </div>

                            {/* Ảnh nhỏ */}
                            <div className="absolute bottom-5 right-10 w-40 z-10">
                                <Image
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={320}
                                    height={200}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Box Giới Thiệu - Cố Định */}
                <div className="absolute left-10 top-1/4 bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-[80%] md:w-[50%] z-10">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">
                        About MYSTAYS
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base">
                        MYSTAYS.com offers the choice of thousands of hotel
                        rooms all around Japan. Our hotel reviews will help you
                        find the best deal in the right location.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base mt-2">
                        Whether you are traveling last minute, as a family or
                        need a hotel for business, we have the right hotel deal
                        for you. We also have multilingual staff if you would
                        prefer to speak to someone. Don't forget about our Best
                        Price Guarantee and Free Cancellation Policy to ease
                        your mind with your next booking.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto flex gap-10 justify-center max-lg:hidden">
                <Link href={"/"}>
                    <Image src={logoHotel1} alt="logo-hotel" />
                </Link>
                <Link href={"/"}>
                    <Image src={logoHotel1} alt="logo-hotel" />
                </Link>{" "}
                <Link href={"/"}>
                    <Image src={logoHotel1} alt="logo-hotel" />
                </Link>{" "}
                <Link href={"/"}>
                    <Image src={logoHotel1} alt="logo-hotel" />
                </Link>{" "}
                <Link href={"/"}>
                    <Image src={logoHotel1} alt="logo-hotel" />
                </Link>{" "}
                <Link href={"/"}>
                    <Image src={logoHotel1} alt="logo-hotel" />
                </Link>
            </div>
        </>
    );
};

export default AboutUs;
