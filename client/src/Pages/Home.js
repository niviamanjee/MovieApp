import React from "react";
import { Link } from "react-router-dom";
import "../home.css";
import Logo from '../clapperboard-logo-1.png';

function Home() {
    return (
        <div>
            <img src={Logo} alt="Logo" className="center"></img>
            <div className="title-container">
                <h1 className="display-3">
                    <b>ClapperBoard</b>
                </h1>
                <br></br>
                <br></br>
                <br></br>
                <button className="btn btn-outline-light btn-lg"><Link to="/movies" style={{textDecoration: 'none'}}>Movie Search</Link></button>
                <button className="btn btn-outline-light btn-lg"><Link to="/shows" style={{textDecoration: 'none'}}>TV Search</Link></button>
                <button className="btn btn-outline-light btn-lg"><Link to="/save" style={{textDecoration: 'none'}}>Saved</Link></button>
            </div>
        </div>
    )
}

export default Home;