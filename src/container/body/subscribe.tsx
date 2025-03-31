import EventNoteIcon from "@mui/icons-material/EventNote";
import Link from "next/link";
const Subscribe = () => {
    return (
        <div className="bg-gray-100 py-12 px-6 text-center">
            <div className="max-w-5xl mx-auto">
                <EventNoteIcon className="mx-auto text-3xl text-gray-700 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                    Subscribe to our Newsletter and get an additional 5% off
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                    * Please be sure to read our company’s{" "}
                    <Link href="/" className="text-[#232e48] underline">
                        Privacy Policy
                    </Link>{" "}
                    in advance, before registering.
                    <br /> * Some plans are excluded.
                </p>
                <div className="grid grid-cols-5 gap-4 mt-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="col-span-1 p-3 bg-[#ffff]"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="col-span-1 p-3 bg-[#ffff]"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="col-span-1 p-3 bg-[#ffff]"
                    />
                    <select className="col-span-1 p-3 bg-[#ffff]">
                        <option>Prefecture/region</option>
                        <option>Tokyo</option>
                        <option>Osaka</option>
                        <option>Kyoto</option>
                    </select>
                    <button className="col-span-1 bg-[#222d4b] text-white p-3  flex items-center justify-center">
                        Subscribe
                        <span className="ml-2">➜</span>
                    </button>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                    <Link href="/" className="underline">
                        No Spam. Unsubscribe Anytime
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Subscribe;
