import { Header,Services,Contact,Footer,StickyNav } from "../../components";
import "./Website.scss"

export const WebSite = () => {
    return (
        <div className="website">
            <div className="website-main">
                <Header />
                <Services />
                <Contact />
                <Footer />
            </div>
            {/* <StickyNav/> */}
        </div>
    );
};
