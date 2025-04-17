"use client";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LicenseInfo } from "@mui/x-license";
import { TextField } from "@mui/material";

export const BookingForm = () => {
    //@ts-ignore
    LicenseInfo.setLicenseKey(process.env.NEXT_PUBLIC_MUIX_KEY);
    return (
        <div className="max-w-5xl mx-auto relative bg-white -top-15 z-1  p-5 flex items-center justify-between  max-lg:flex-col max-lg:gap-5">
            {/* Địa điểm */}
            <div className="flex flex-col items-center text-center px-4 max-lg:w-full ">
                <label className="text-sm py-1">Where in Japan?</label>
                <TextField
                    className="max-lg:w-full"
                    placeholder="City & Hotel"
                    type="search"
                />
            </div>

            {/* Ngày check-in & check-out */}
            <div className="max-lg:w-full max-lg:px-4">
                <div className="flex justify-around text-sm">
                    <span>Check in</span>
                    <span>Check out</span>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateRangePicker"]}>
                        <DateRangePicker
                            localeText={{
                                start: "",
                                end: "",
                                cancelButtonLabel: "",
                                clearButtonLabel: "",
                                okButtonLabel: "",
                                todayButtonLabel: "",
                            }}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </div>
            <div className="flex justify-center max-lg:w-full">
                {/* Số khách */}
                <div className="text-center px-4 max-lg:w-full">
                    <label className="text-sm">Guest No.</label>
                    <div>
                        <TextField
                            className="lg:w-[80px] max-lg:w-full"
                            placeholder="Guests"
                            type="number"
                        />
                    </div>
                </div>

                {/* Mã giảm giá */}
                <div className="flex flex-col text-center px-4 justify-center max-lg:w-full">
                    <label className="text-sm">Promo Code</label>
                    <TextField
                        className="lg:w-[105px] max-lg:w-full"
                        placeholder="------------------------------"
                        type="text"
                    />
                </div>
            </div>
            {/* Nút tìm kiếm */}
            <div className="flex flex-col text-center justify-center lg:ml-5 max-lg:w-full max-lg:px-4">
                <label className="text-nowrap">Best Price Guarantee</label>

                <button className="bg-yellow-400 px-6 py-4 font-bold  hover:bg-yellow-500 transition max-lg:w-full">
                    Search
                </button>
            </div>
        </div>
    );
};
