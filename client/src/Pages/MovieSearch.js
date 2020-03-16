
// import './App.css';
import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
import Card from "../Components/Card"
import "./MovieSearch.css"

function MovieSearch() {
    // Setting our component's initial state
    const { movieSearch, movie, handleSubmitMovies, handleInputChangeMovies, handleSubmitMoreInfo } = useContext(SearchContext)
    
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label>Search for Movies</label>
                    <input id="query-input" className="form-control" onChange={handleInputChangeMovies}></input>
                </div>
                <button type="submit" className="btn-lg" onClick={handleSubmitMovies}>Search</button>
            </form>
            <div className=' wrapper'>
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
        
        </div>
    )
}

export default MovieSearch