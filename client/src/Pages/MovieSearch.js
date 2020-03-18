
// import './App.css';
import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
import Card from "../Components/Card"
import "./MovieSearch.css"
import Jumbotron from "../Components/Jumbotron";
import Logo from "../clapperboard-logo-1.png"
import Film from "../film-image.png"

function MovieSearch() {
    // Setting our component's initial state
    const { movieSearch, movie, handleSubmitMovies, handleInputChangeMovies, handleSubmitMoreInfo } = useContext(SearchContext)
    console.log(movie)
    return (
        <>
        <div className='container logo-holder'>
            <img src={Logo} alt="Logo" className="center-photo"></img>
            <div className='movie-holder'>
                <h1 className='movieTitle'>MOVIES <span>
                    {/* <img src={Film} className="film" width="100" height='50'></img> */}
                    </span>
                    </h1>
                {/* SEARCH BAR */}
                <div class="container input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="submit" id="button-addon1" onClick={handleSubmitMovies}>Search</button>
                    </div>
                    <input id="query-input" type="text" class="form-control" placeholder="Search for Movies..." aria-label="" aria-describedby="button-addon1" onChange={handleInputChangeMovies}></input>
                </div>
            </div>     
        </div>
        {/* CARD HOLDER FOR THE SEARCH */}
        <div className="container xxx">
            <div className="row">
                {movie.map(result =>
                ( 
                    <Card 
                    title ={result.title}
                    released ={result.releaseDate}
                    overview = {result.overview}
                    image = {result.poster}
                    rating = {result.rating}
                    movie={movie} 
                    movieSearch={movieSearch}
                    moreInfo = {handleSubmitMoreInfo}/>
                ))}
            </div>
        </div>
    </>
    )
}

export default MovieSearch;


 {/* <form className="container">
                <div className="form-group">
                    <input id="query-input" placeholder="Search for Movies..." className="form-control" onChange={handleInputChangeMovies}></input>
                </div>
                <button type="submit" className="btn-small" onClick={handleSubmitMovies}>Search</button>
            </form> */}