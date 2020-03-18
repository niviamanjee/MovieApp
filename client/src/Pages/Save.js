import React, { useState, useEffect } from "react";
import API from "../utils/API"
import CardSaved from "../Components/CardSaved";
import NavBar from "../Components/NavBar"
import "./MovieSearch.css"

function Save() {
    // Setting our component's initial state
    const [savedMovies, setSavedMovies] = useState([])
    console.log(savedMovies)
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
    )

}

export default Save;
