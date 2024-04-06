import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function Root(){
    return (
        <div className="root-element">
            <Header />
            <ScrollToTop />
            <div className="outlet">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}