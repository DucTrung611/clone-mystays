"use client";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const FooterMenu = () => {
    const menuItems = [
        {
            icon: <SpeakerNotesIcon className="text-[#232e48]" />,
            title: "Reservations",
            links: [
                "Check/Cancel Hotel Reservations",
                "Cancellation Policy",
                "Best Price Guarantee",
                "Terms and Conditions for Accommodation Contracts",
            ],
        },
        {
            icon: <SpeakerNotesIcon className="text-[#232e48]" />,
            title: "Get in Touch",
            links: [
                "FAQ",
                "Individual Guests",
                "Corporate Guests",
                "Press/Media Representatives",
            ],
        },
        {
            icon: <SpeakerNotesIcon className="text-[#232e48]" />,
            title: "Company",
            links: ["Company Outline"],
        },
        {
            icon: <SpeakerNotesIcon className="text-[#232e48]" />,
            title: "Website Use",
            links: [
                "Terms of Use",
                "Privacy Policy",
                "Act on Specified Commercial Transactions",
            ],
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number): void => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            {/* Desktop layout */}
            <div className="max-w-6xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#232e48] max-lg:hidden">
                {menuItems.map((item, index) => (
                    <div key={index}>
                        <div className="flex items-center space-x-2 font-semibold">
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                        <div className="border-b border-gray-300 w-full my-2"></div>
                        <ul className="text-sm text-gray-600 space-y-1">
                            {item.links.map((link, idx) => (
                                <li
                                    key={idx}
                                    className="hover:text-[#232e48] cursor-pointer"
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Mobile layout */}
            <div className="lg:hidden">
                {menuItems.map((item, index) => (
                    <List key={index}>
                        <ListItemButton onClick={() => handleClick(index)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                            {openIndex === index ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            )}
                        </ListItemButton>
                        <Collapse
                            in={openIndex === index}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                <div className="pl-5">
                                    <div className="border-b border-gray-300 w-full my-2"></div>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {item.links.map((link, idx) => (
                                            <li
                                                key={idx}
                                                className="hover:text-[#232e48] cursor-pointer"
                                            >
                                                {link}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </List>
                        </Collapse>
                    </List>
                ))}
            </div>
        </>
    );
};

export default FooterMenu;
