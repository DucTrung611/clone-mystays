"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";

export default function NestedList() {
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

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            {menuItems.map((item, index) => (
                <List key={index}>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <SpeakerNotesIcon />
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
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
        </>
    );
}
