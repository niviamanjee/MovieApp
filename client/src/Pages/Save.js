import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API"
import CardSaved from "../Components/CardSaved";
import NavBar from "../Components/NavBar"
import "./MovieSearch.css"
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
                    <h1 className='movieTitle'> <span>
                        <i class="fas fa-film"></i> </span> SAVED MOVIES <span>
                            <i class="fas fa-film"></i></span>
                    </h1>
                </div>
                <br />

                <div className="row">
                    {savedMovies.map(result =>
                        (
                            <CardSaved
                                title={result.title}
                                released={result.released}
                                overview={result.overview}
                                rating={result.rating}
                                image={result.image}
                                deleteCard={deleteCard}
                                cardId={result._id}
                            />
                        ))}
                </div>
            </div>
        </>
    )
}

export default Save;
