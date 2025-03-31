import AboutUs from "./about.us";
import FeatureHotel from "./feature.hotel";
import LatestNews from "./latest.news";
import Subscribe from "./subscribe";
import ThematicTravel from "./thematic.travel";

const AppBody = () => {
    return (
        <>
            <FeatureHotel />
            <ThematicTravel />
            <Subscribe />
            <AboutUs />
            <LatestNews />
        </>
    );
};

export default AppBody;
