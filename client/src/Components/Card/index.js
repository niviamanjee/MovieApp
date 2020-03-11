import React, { useContext } from 'react';
import SearchContext from "../../utils/SearchContext"
import '../../App.css';


function Card() {
    const { show } = useContext(SearchContext)
    const { title, id, summary, image, creators, episode_time, genres, networks, episodes_number, seasons_number, first_air_date, rating } = show


    return (


        <div className="back">
            <p className="film-description">
                {summary}
            </p>
            <hr />
            {/* <p className="film-directors"><b>Directed by </b>Anthony Russo, Joe Russo</p>
            <p className="film-writers"><b>Written by </b>Christopher Markus, Stephen McFeely</p>
            <p className="film-stars"><b>Starring </b>Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson</p>
            <hr />
            <p className="film-website"><a href="https://movies.disney.com/avengers-endgame">Official Website</a></p>
            <p className="film-trailer"><a href="https://www.youtube.com/watch?v=hA6hldpSTF8">Official Trailer</a></p>
            <hr />
            <p className="film-release-date"><b>Release (USA): </b>26 April 2019</p>
            <p className="film-runtime"><b>Runtime: </b>181 min.</p>
            <hr />
            <p className="imdb-rating"><b>IMDb Rating: </b>8.5 out of 10</p>
            <p className="rotten-tomatoes"><b>Rotten Tomatoes: </b>94 out of 100</p> */}
        </div>

    )
}



export default Card;
