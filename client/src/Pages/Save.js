import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API"
import CardSaved from "../Components/CardSaved";
import CardShowSaved from "../Components/CardShowSaved"
import "./MovieSearch.css"
import Logo from "../clapperboard-logo-1.png";

function Save() {
    // Setting our component's initial state
    const [savedMovies, setSavedMovies] = useState([])
    console.log(savedMovies)
    const [savedShows, setSavedShows] = useState([])

    // Setting our component's initial state
    // const { savedShows } = useContext(SearchContext);


    // const { showSearch, shows, handleSubmit, handleInputChange } = useContext(SearchContext)
    useEffect(() => {
        loadMovies()
        loadShows()
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
    const loadShows = () => {
        API.getSavedShows()
            .then(res => {
                console.log("data of saved shows: ", res.data)
                setSavedShows(res.data)
            })
    }

    function deleteCard(_id) {
        API.deleteMovieCard(_id)
            .then(res => loadMovies())
            .catch(err => console.log(err));
        console.log()
    }

    function deleteCardShow(_id) {
        API.deleteShowCard(_id)
            .then(res => loadShows())
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

            <div classname="container">
                <img src={Logo} alt="Logo" className="center-photo"></img>
                <div className='movie-holder'>
                    <h1 className='movieTitle'> <span>
                        <i class="fas fa-film"></i> </span> SAVED SHOWS <span>
                            <i class="fas fa-film"></i></span>
                    </h1>
                </div>
                <br />
                <div classname="row"> {savedShows.map(show =>
                    <CardShowSaved
                        title={show.title}
                        imageUrl={show.imageUrl}
                        synopsis={show.synopsis}
                        rating={show.rating}
                        creator={show.creator}
                        episode_time={show.episode_time}
                        genres={show.genres}
                        networks={show.networks}
                        episodes_number={show.episodes_number}
                        seasons_number={show.seasons_number}
                        first_air_date={show.first_air_date}
                        deleteCardShow={deleteCardShow}
                        cardId={show._id}

                    />
                )}</div>
            </div>
        </>
    )
}

export default Save;
