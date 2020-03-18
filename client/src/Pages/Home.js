import React, {useContext} from "react";
// import NavBar from "../Components/Navbar";
// import BackgroundImage from "../../src/clapperboard-homepage-background.jpg";
import "../home.css";
import Card from "../Components/Card"
import SearchContext from "..//utils/SearchContext"
import Jumbotron from "../Components/Jumbotron";
import NavBar from "../Components/NavBar"
import React from "react";
import { Link } from "react-router-dom";
import "../home.css";
import Logo from '../clapperboard-logo-1.png';

function Home() {
    const { trending } = useContext(SearchContext)
    console.log(trending)
    return (
        <>
     
        <div>
            <img src={Logo} alt="Logo" className="center-photo"></img>
            <div className="title-container centered">
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
            <div className="container">
     <div class="jumbotron jumbotron-fluid">
  <div class="container text-center">
    <h1 class="display-4">Top Trending Movies & Shows </h1>
    <p class="lead"></p>
  </div>
</div>
<NavBar/>
<div className=' wrapper'>
                <div className="row">
                {trending.map(result =>
                ( 
                    <Card 
                    title ={result.titleM}
                    titleS ={result.titleS}
                    released ={result.releaseDate}
                    airedDate = {result.airedDate}
                    overview = {result.overview}
                    image = {result.poster}
                    rating = {result.rating}
                    mediaType={result.mediaType}

                    />
            ))}
            </div>
            </div>
            </div>
        </div>
</>
          
 )
}

export default Home;