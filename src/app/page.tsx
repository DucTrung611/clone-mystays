import AppBody from "@/container/body/app.body";
import AppFooter from "@/container/footer/app.footer";
import AppHeader from "@/container/header/app.header";

export default function Home() {
    return (
        <div className="sm:w-full">
            <AppHeader />
            <AppBody />
            <AppFooter />
        </div>
    );
}
