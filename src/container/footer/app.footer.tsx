import FooterMenu from "./menu";
import Image from "next/image"; // Import Image component
import logoHomepage from "../../../public/logoHomepage.svg";
const AppFooter = () => {
    return (
        <>
            <div className="bg-[#f2f2f2] py-5">
                <FooterMenu />
            </div>
            <div className="bg-[#232e48] py-10">
                <div className="max-w-6xl mx-auto py-4 text-amber-50 flex flex-col gap-2">
                    <Image
                        src={logoHomepage}
                        alt="logo"
                        width={150}
                        height={50}
                        className="max-lg:mx-auto"
                    />
                    <div />
                    <span className="mt-3 max-lg:mx-auto">
                        © MYSTAYS HOTEL MANAGEMENT Co., Ltd.
                    </span>
                </div>
            </div>
        </>
    );
};

export default AppFooter;
