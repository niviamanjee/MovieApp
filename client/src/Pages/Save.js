import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API"
import CardSaved from "../Components/CardSaved";
import CardShowSaved from "../Components/CardShowSaved"
import "./MovieSearch.css"
// import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
// import "../App.css";

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
        API.deleteCard(_id)
            .then(res => loadMovies())
            .catch(err => console.log(err));
        console.log()
    }

    return (
        <>


            <div className=' wrapper'>
                <h2 className="gold centered">Saved Movies</h2>
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
                            // rating = {result.rating}
                            // mediaType={result.mediaType}

                            />
                        ))}
                </div>
            </div>

            <div classname=' wrapper'>

                <h2 className="gold centered">Saved Shows</h2>
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
                        key={show.key}
                    />
                )}</div>
            </div>
        </>
    )
}

export default Save;
