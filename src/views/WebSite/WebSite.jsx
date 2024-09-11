import { Header, Hotels, Contact, Footer } from "../../components";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import "./Website.scss"

export const WebSite = () => {
    return (
        <div className="website">
            <div className="website-main">
                <Header />
                <Hotels />
                <AboutUs />
                <Footer />
            </div>
        </div>
    );
};
