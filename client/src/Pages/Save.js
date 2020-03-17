import React, { useState, useEffect } from "react";
import API from "../utils/API"
import Card from "../Components/Card";
import NavBar from "../Components/NavBar"
// import SearchContext from "../utils/SearchContext";
// import Card from "../Components/Card"

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

    return (
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
                {savedMovies.map(result =>
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
    )

}

export default Save;
