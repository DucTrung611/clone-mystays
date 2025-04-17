import Image, { StaticImageData } from "next/image";
import imgHotel1 from "../../../public/feature-hotel-1.jpg";
import imgHotel2 from "../../../public/feature-hotel-2.jpg";
import imgHotel3 from "../../../public/feature-hotel-3.jpg";
import banner from "../../../public/banner.jpg";
import StarRateIcon from "@mui/icons-material/StarRate";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FeatureHotel = () => {
    interface IData {
        img: StaticImageData;
        title: string;
        address: string;
        rate: number;
        price: string;
    }
    const data: IData[] = [
        {
            img: imgHotel1,
            title: "FUSAKI BEACH RESORT HOTEL & VILLAS",
            address: "Okinawa",
            rate: 4.3,
            price: "¥43,875 ~",
        },
        {
            img: imgHotel2,
            title: "HOTEL MYSTAYS PREMIER Akasaka",
            address: "Tokyo",
            rate: 4.2,
            price: "",
        },
        {
            img: imgHotel3,
            title: "HOTEL MYSTAYS Hiroshima Peace Park",
            address: "Hiroshima",
            rate: 3.9,
            price: "¥10,200 ~",
        },
    ];
    return (
        <div className="bg-[#f2f2f2]  pb-5">
            <div className="max-w-6xl mx-auto">
                <h3 className="flex justify-center font-bold text-4xl">
                    Featured Hotels
                </h3>
                <div className="mt-10 grid grid-cols-3 gap-10 max-lg:grid-cols-1 max-lg:px-10">
                    {data.map((hotel, index) => (
                        <div
                            key={index}
                            className="bg-[#fff] shadow-2xl flex flex-col gap-2"
                        >
                            <Image
                                src={hotel.img}
                                alt={hotel.title}
                                className="w-full "
                            />
                            <div className="m-2 mb-10">
                                <h3 className="font-medium">{hotel.title}</h3>
                                <span className="text-xs font-light">
                                    {hotel.address}
                                </span>

                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        {[...Array(Math.floor(hotel.rate))].map(
                                            (_, i) => (
                                                <StarRateIcon key={i} />
                                            )
                                        )}
                                        <span>{hotel.rate}</span>
                                    </div>
                                    <span>{hotel.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end my-10">
                    <div className="flex items-center text-[#232e48] font-semibold cursor-pointer space-x-2">
                        <span className="text-lg">See all News</span>
                        <div className="w-6 h-6 flex items-center justify-center bg-[#232e48] rounded-full">
                            <ArrowForwardIosIcon
                                className="text-white text-sm"
                                fontSize="small"
                            />
                        </div>
                    </div>
                </div>

                <Link href={"/"}>
                    <Image
                        src={banner}
                        alt="banner"
                        className="w-full h-32 mt-20 mb-15"
                    />
                </Link>
            </div>
        </div>
    );
};

export default FeatureHotel;
