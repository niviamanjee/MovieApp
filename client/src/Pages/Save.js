import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API"
import CardSaved from "../Components/CardSaved";
import NavBar from "../Components/NavBar"
import "./MovieSearch.css"
import Film from "../apple-touch-icon.png"
import SearchContext from "../utils/SearchContext";
import Logo from "../clapperboard-logo-1.png";

function Save() {
    // Setting our component's initial state
    const [savedMovies, setSavedMovies] = useState([])
    console.log(savedMovies)

    // Setting our component's initial state
    const { savedShows } = useContext(SearchContext);

    console.log("saved shows: ", savedShows);

    // const { showSearch, shows, handleSubmit, handleInputChange } = useContext(SearchContext)
    useEffect(() => {
        loadMovies()
    }, [])

    // Load all the saved data from MongoDB
    function loadMovies() {
        API.getSavedMovieData()
            .then(res =>
                setSavedMovies(res.data)
            )
            .catch(err => console.log(err)); 
            console.log(API.getSavedMovieData) 
    };

    function deleteCard(_id) {
        API.deleteMovieCard(_id)
            .then(res => loadMovies())
            .catch(err => console.log(err));
            console.log()
    }

    return (
        <>
        
        <div className="container ">
        <img src={Logo} alt="Logo" className="center-photo"></img>
            <div className='movie-holder'>
                <h1 className='movieTitle'>SAVED MOVIES <span>
                    {/* <img src={Film} className="film" width="100" height='50'></img> */}
                    </span>
                    </h1>
                    </div>
       
<br/>

<div className=''>
                <div className="row">
                {savedMovies.map(result =>
                ( 
                    <CardSaved 
                    title ={result.title}
                    released ={result.released}
                    overview = {result.overview}
                    rating = {result.rating}
                    image = {result.image}
                    deleteCard = {deleteCard}
                    cardId = {result._id}
                    // rating = {result.rating}
                    // mediaType={result.mediaType}

                    />
            ))}
            </div>
        </div>
     </div>

        <div>
            <br></br>
            <h2 className="gold centered">Saved Shows</h2>
            <div> {savedShows.map(show =>
                <div key={show.key}>
                    <img src={show.imageUrl} alt={show.title}></img>
                    <p>{show.title}</p>
                    <p>Creators: {show.creator}</p>
                    <p>{show.synopsis}</p>
                </div>
            )}</div>
        </div>
        </>
    )
}

export default Save;
