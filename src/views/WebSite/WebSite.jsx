import { Header, Hotels, Contact, Footer } from "../../components";
import "./Website.scss"

export const WebSite = () => {
    return (
        <div className="website">
            <div className="website-main">
                <Header />
                <Hotels />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};
