"use client";
import Image from "next/image";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import SlickList from "./slick.list";
import { BookingForm } from "./booking.form";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AppHeader = () => {
    const [language, setLanguage] = useState("English");

    const handleLanguageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setLanguage(event.target.value);
        console.log("Selected language:", event.target.value);
    };
    return (
        <>
            <div className="bg-[#232e48]">
                <div className="max-w-5xl mx-auto py-4 flex justify-between">
                    <Image
                        src={`logoHomepage.svg`}
                        alt="logo"
                        width={150}
                        height={50}
                    />
                    <div>
                        <div className="flex gap-4 justify-end text-white">
                            <a href="/" className="flex gap-2">
                                <div>+81-3-3434-3939</div>
                                <PhoneEnabledIcon />
                            </a>
                            <div className="flex gap-2 md:hidden">
                                <select
                                    id="language"
                                    value={language}
                                    className="w-m h-[20px]"
                                    onChange={handleLanguageChange}
                                >
                                    <option
                                        value="English"
                                        className="text-black"
                                    >
                                        English
                                    </option>
                                    <option
                                        value="Chinese"
                                        className="text-black"
                                    >
                                        Chinese
                                    </option>
                                    <option
                                        value="Japanese"
                                        className="text-black"
                                    >
                                        Japanese
                                    </option>
                                    <option
                                        value="Vietnamese"
                                        className="text-black"
                                    >
                                        Vietnamese
                                    </option>
                                </select>
                                <LanguageIcon />
                            </div>
                        </div>
                        <div>
                            <ul className="flex items-center justify-between px-4 py-3 text-white gap-12">
                                {/* Search Box */}
                                <li>
                                    <div className="relative">
                                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

                                        <input
                                            className="rounded-md pl-10 bg-[#39435a] h-6 w-40"
                                            aria-label="Search"
                                            type="text"
                                            name="searchbox"
                                            maxLength={30}
                                            placeholder="Find a hotel"
                                        />
                                    </div>
                                </li>

                                {/* Desktop Menu */}

                                <li>
                                    <Link href="/" className="">
                                        Hotel List
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="">
                                        Brands
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="">
                                        Hot springs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="">
                                        Banquet & Meeting
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="">
                                        Features
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto">
                    <SlickList />
                </div>
                <div className="w-full  absolute  z-20">
                    <BookingForm />
                    <div className="flex gap-10 justify-center">
                        <div className="flex gap-2">
                            <CheckCircleIcon />
                            <span>Best Price Guarantee</span>
                        </div>
                        <div className="flex gap-2">
                            <CheckCircleIcon />
                            <span>Online Concierge</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppHeader;
