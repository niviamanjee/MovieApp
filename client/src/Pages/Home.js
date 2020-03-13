import React from "react";
import NavBar from "../Components/Navbar";
import BackgroundImage from "../../public/clapperboard-homepage-background.jpg";
import "../home.css";

function Home() {
    return (
        <NavBar />
        <div className="background">
            <BackgroundImage />
            <div className="carousel-caption d-block">
                <h1 className="display-3">
                    ClapperBoard
                </h1>
            </div>
        </div>
    )
}

export default Home;