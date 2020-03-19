import React from 'react';
import '../../Components/Card/card.css';
// import SearchContext from "../../utils/SearchContext"

function Back({ title, creator, rating, networks, genres, episode_time, episodes_number,
    seasons_number, first_air_date }) {




    // console.log(cardId)
    return (
        <div className="flip-card-back">
            <hr />
            <p>{title}</p>
            <p className="creators"><b>Creators: </b>{creator}</p>
            {/* <p className="film-runtime"><b>Overview: </b>{overview}</p> */}
            <hr />
            <p className="rating"><b>Rating: </b>{rating}</p>
            <p className="networks"><b>Networks: </b>{networks}</p>
            <p className="genres"><b>Genres: </b>{genres}</p>
            <hr />

            <p className="episode-time"><b>Episode Time: </b>{episode_time} minutes</p>
            <p className="episode-number"><b>Number of Episodes: </b>{episodes_number}</p>
            <p className="season-number"><b>Number of Seasons: </b>{seasons_number}</p>
            <p className="first-air-date"><b>First Air Date: </b>{first_air_date}</p>
            <hr />
            {/* <button class="btn btn-outline-danger btn-sm" onClick={() => saveCard( title, titleS, overview, airedDate, released, rating, image)}> Save Card</button> */}
            {/* <button class="btn btn-outline-danger btn-sm" onClick={() => deleteCardShow(cardId)}> Delete <i class="fas fa-trash"></i></button> */}
        </div>
    )
}

export default Back;





