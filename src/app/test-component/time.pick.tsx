"use client";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, TextField } from "@mui/material";

const FlightDatePicker = () => {
    const [checkIn, setCheckIn] = React.useState<Dayjs | null>(null);
    const [checkOut, setCheckOut] = React.useState<Dayjs | null>(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box className="flex flex-col md:flex-row gap-4 items-center justify-center bg-white p-4 shadow-lg rounded-lg">
                <DatePicker
                    label="Outbound"
                    value={checkIn}
                    onChange={(newValue) => setCheckIn(newValue)}
                    minDate={dayjs()}
                    // renderInput={(params) => <TextField {...params} />}
                />

                <DatePicker
                    label="Inbound"
                    value={checkOut}
                    onChange={(newValue) => setCheckOut(newValue)}
                    minDate={checkIn ? checkIn.add(1, "day") : dayjs()}
                    // renderInput={(params) => <TextField {...params} />}
                />
            </Box>
        </LocalizationProvider>
    );
};

export default FlightDatePicker;
