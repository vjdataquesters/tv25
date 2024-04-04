import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Root(){
    return (
        <div className="root-element">
            <Header />
            <div className="outlet" style={{minHeight:"1000px"}}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}