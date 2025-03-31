export const BookingForm = () => {
    return (
        <div className="relative top-[-60] left-1/2 -translate-x-1/2  max-w-6xl bg-white p-4 shadow-[0_15px_32px_-4px_rgba(37,58,106,0.3)] flex items-center justify-between">
            {/* Địa điểm */}
            <div className="flex flex-col items-center text-center px-4">
                <label className="text-sm font-semibold">Where in Japan?</label>
                <input
                    type="text"
                    placeholder="City & Hotel"
                    className="border p-2  text-center w-50"
                />
            </div>

            {/* Ngày check-in & check-out */}
            <div className="flex items-center gap-4">
                <div className="text-center">
                    <label className="text-sm font-semibold">Check In</label>
                    <div className="border p-2  text-center w-20">
                        <span className="text-xl font-bold">06</span>
                        <div className="text-xs">Apr 2025</div>
                    </div>
                </div>

                <span className="text-2xl">→</span>

                <div className="text-center">
                    <label className="text-sm font-semibold">Check Out</label>
                    <div className="border p-2  text-center w-20">
                        <span className="text-xl font-bold">07</span>
                        <div className="text-xs">Apr 2025</div>
                    </div>
                </div>
            </div>

            {/* Số khách */}
            <div className="text-center px-4">
                <label className="text-sm font-semibold">Guest No.</label>
                <div className="border p-2  text-center w-16">
                    <span className="text-xl font-bold">2</span>
                    <div className="text-xs">Guests</div>
                </div>
            </div>

            {/* Mã giảm giá */}
            <div className="flex flex-col text-center px-4">
                <label className="text-sm font-semibold">Promo Code</label>
                <input
                    type="text"
                    placeholder="------"
                    className="border p-2  text-center w-20"
                />
            </div>

            {/* Nút tìm kiếm */}
            <button className="bg-yellow-400 px-6 py-3  font-bold shadow-md hover:bg-yellow-500 transition">
                Search
            </button>
        </div>
    );
};
