import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API"
import CardSaved from "../Components/CardSaved";
import NavBar from "../Components/NavBar"
import "./MovieSearch.css"
// import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
// import "../App.css";

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
        API.deleteCard(_id)
            .then(res => loadMovies())
            .catch(err => console.log(err));
            console.log()
    }

    return (
        <>
        <div className="container ">
            <div className="savedJumbotron">
            <div class="jumbotron fluid-jumbotron ">
  <div class="container text-center">
    <h1 class="display-4">My Saved Movies </h1>
    <p class="lead"></p>
  </div>
</div>
            </div>
  
<br/>
<NavBar/>
<div className=' wrapper'>
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
