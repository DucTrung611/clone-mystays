import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";

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

    return (
        <div className="max-w-6xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#232e48]">
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
    );
};

export default FooterMenu;
