import latestNew from "../../../public/pic-latestnews.jpg";
import Image, { StaticImageData } from "next/image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface IData {
    image: StaticImageData;
    title: string;
    day: string;
}

const LatestNews = () => {
    const data: IData[] = [
        {
            image: latestNew,
            title: "Hot Spring Theme Park “Spa Resort Hawaiians” Opening on March 1st, 2025",
            day: "March 4, 2025",
        },
        {
            image: latestNew,
            title: "[KAMENOI HOTEL KOCHI] Recommended activities",
            day: "March 7, 2025",
        },
        {
            image: latestNew,
            title: `[MYSTAYS HOTEL GROUP] Twenty C’est la vie Resort Izumigo hotels nationwide are added to the Group on January 31st, 2025`,
            day: "February 3, 2025",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto my-10">
            <h2 className="text-3xl font-bold text-center">Latest News</h2>

            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-15 max-w-6xl mx-auto my-10">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col h-full bg-white  p-4"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-md"
                        />

                        <h2 className="mt-4 font-bold">{item.title}</h2>
                        <span className="text-gray-500 text-sm flex items-center mt-2">
                            <AccessTimeIcon className="w-4 h-4 mr-1" />
                            {item.day}
                        </span>

                        {/* Đẩy nút xuống dưới cùng */}
                        <div className="mt-auto my-15 max-lg:mt-5">
                            <button className="w-[125px] h-[40px] bg-[#232e48] text-white font-semibold mx-auto">
                                View More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end">
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
        </div>
    );
};

export default LatestNews;
