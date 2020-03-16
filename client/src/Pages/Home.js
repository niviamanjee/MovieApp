import React, {useContext} from "react";
// import NavBar from "../Components/Navbar";
// import BackgroundImage from "../../src/clapperboard-homepage-background.jpg";
import "../home.css";
import Card from "../Components/Card"
import SearchContext from "..//utils/SearchContext"
import Jumbotron from "../Components/Jumbotron";
import NavBar from "../Components/NavBar"

function Home() {
    const { trending } = useContext(SearchContext)
    console.log(trending)
    return (
        
<>
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
      
 
    </>             
 )
}

export default Home;