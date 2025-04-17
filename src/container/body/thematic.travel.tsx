import Image from "next/image";
import imgThematic1 from "../../../public/imgThematic1.jpg";
import imgThematic2 from "../../../public/imgThematic2.jpg";
import imgThematic3 from "../../../public/imgThematic3.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const ThematicTravel = () => {
    const data = [
        {
            img: imgThematic1,
            title: "Convenient hotels for skiing and snowboarding",
        },
        {
            img: imgThematic2,
            title: "Recommended hotels for cherry blossom season",
        },
        {
            img: imgThematic3,
            title: "Hotels where you can encounter the beauty and charms of each season",
        },
        {
            img: imgThematic1,
            title: "Hotels Directly Accessible from Major Airports",
        },
        {
            img: imgThematic2,
            title: "Hotels Within a 5-Minute Walk of Train Stations",
        },
        {
            img: imgThematic3,
            title: "Hotels where you can enjoy Japanese hot springs",
        },
        {
            img: imgThematic1,
            title: "Recommended Trips on the Hokuriku Shinkansen",
        },
        {
            img: imgThematic2,
            title: "Experience the Charm of Northern Lands: A Journey to Hokkaido",
        },
    ];
    return (
        <div className="shadow-2xl bg-[#ffff] pb-3.5">
            <div className=" max-w-6xl mx-auto  ">
                <div className="">
                    <h1 className="m-20 text-center text-4xl font-bold">
                        Thematic Travel
                    </h1>
                </div>

                <div className="mt-10 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-lg:px-10">
                    {data.map((thematic, index) => (
                        <div key={index} className=" flex flex-col gap-2">
                            <Image
                                src={thematic.img}
                                alt="hotel image"
                                className="w-full"
                            />
                            <h3 className="font-mono">{thematic.title}</h3>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10 mb-10">
                    <button className="bg-[#222d4b] text-amber-50 h-12 w-52 m-auto ">
                        List of feature
                        <KeyboardArrowRightIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThematicTravel;
