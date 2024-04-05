import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Root(){
    return (
        <div className="root-element">
            <Header />
            <div className="outlet">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}