import React from "react";
import NavBar from "../Components/NavBar";

// import BackgroundImage from "../../src/clapperboard-homepage-background.jpg";
import "../home.css";

function Home() {
    return (
        <div>

            <NavBar />
            <div className="background">
                {/* <BackgroundImage /> */}
                <div className="carousel-caption d-block">
                    <h1 className="display-3">
                        ClapperBoard
                </h1>
                </div>
            </div>
        </div>
    )
}

export default Home;