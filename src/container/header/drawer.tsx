"use client";

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function DrawerHeader() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }
            setOpen(open);
        };

    return (
        <div className="bg-[#232e48]">
            {/* Button mở Drawer */}
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon className="text-white" />
            </IconButton>

            {/* Drawer từ bên phải */}
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <div className="bg-[#232e48] h-full text-white flex flex-col p-5 gap-7 text-sm">
                    <Link href={"/"}>
                        <span>Home</span>
                    </Link>
                    <Link href={"/"}>
                        <span>Hotel List</span>
                    </Link>
                    <Link href={"/"}>
                        <span>Brands</span>
                    </Link>
                    <Link href={"/"}>
                        <span>Hot springs</span>
                    </Link>
                    <Link href={"/"}>
                        <span>Banquet & Meeting</span>
                    </Link>
                    <Link href={"/"}>
                        <span>Features</span>
                    </Link>
                    <Link href={"/"}>
                        <span>Destinations</span>
                    </Link>
                    <Link href={"/"}>
                        <span>MYSTAYS Member’s Stamp Card</span>
                    </Link>
                    <Link href={"/"}>
                        <span>MYSTAYS Premier Residence</span>
                    </Link>

                    <div className="flex flex-col gap-y-2 text-amber-50">
                        <span>Choose a Language:</span>
                        <div className="flex flex-col gap-y-2 pl-2">
                            <Link href={"/"}>
                                <span>Tiếng Việt</span>
                            </Link>
                            <Link href={"/"}>
                                <span>English</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}
