import React from "react";
import { SideBar, Navbar, ContentContainer } from "../../components";

import "./LandingPage.css";

export default function LandingPage() {
    return (
        <div className="landingPage">
            <div id="sidebar">
                <SideBar />
            </div>
            <div id="main">
                <div id="navbar">
                    <Navbar title="Content Type" />
            </div>
            <div id="content">
                <ContentContainer />
            </div>
        </div>
    </div>
    );
}
