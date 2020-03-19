import React, { useContext } from 'react';
import '../../Components/Card/card.css';
import SearchContext from "../../utils/SearchContext"

function Back() {

  const { show, saveCardShow, streaming } = useContext(SearchContext)
  console.log(streaming);
<<<<<<< HEAD
  const { title, id, summary, image, creators, actors, episode_time, genres, networks, episodes_number, seasons_number, first_air_date, rating } = show;
  // var streamingViews = streaming.map(stream => (
  //   <li key={streaming.service} ><a class="btn btn-outline-danger btn-sm" onClick={() => window.open(stream.url, "_blank")} role="button">{stream.service}</a></li>
  // ))
  // console.log(streamingViews)
=======
  const { title, synopsis, image, creator, actors, episode_time, genres, networks, episodes_number, seasons_number, first_air_date, rating } = show;
  var streamingViews = streaming.map(stream => (

    <a key={streaming.service} class="btn btn-outline-danger btn-sm" onClick={() => window.open(stream.url, "_blank")} role="button">{stream.service}</a>
  ))
  console.log(streamingViews)
>>>>>>> 138c7d1248d885eeb337b07e0d55fddaa77084c8

  return (
    <div className="flip-card-back">

      <hr />
      <p className="show-creators"><b>Created by </b>{creator}</p>
      <hr />
      <hr />
      <p className="film-runtime"><b>Overview: </b>{synopsis}</p>
      <hr />
      <p className="show-seasons"><b>Seasons: </b>{seasons_number}</p>
      <p className="show-episodes"><b>Episodes: </b>{episodes_number}</p>
      <p className="show-ep-time"><b>Runtime: </b>{episode_time} minutes</p>
      <p className="show-premiere"><b>Premiered: </b>{first_air_date}</p>
      <p className="show-genres"><b>Genres: </b>{genres}</p>
      <p className="show-networks"><b>Network(s): </b>{networks}</p>
      <hr />
      <a class="btn btn-outline-danger btn-sm" href="#" role="button">YouTube It!</a>
<<<<<<< HEAD
      <ul>
        {/* {streamingViews} */}
      </ul>
      <button class="btn btn-outline-danger btn-sm" onClick={() => saveCardShow(id, image, title, creators, summary)}> Save Card</button>
=======

      {streamingViews}
      <br></br>
      <button class="btn btn-outline-danger btn-sm" onClick={() => saveCardShow(image, title, creator, synopsis, episode_time,
        genres, networks, episodes_number, seasons_number, first_air_date, rating)}> Save Card <i class="fas fa-save"></i></button>
>>>>>>> 138c7d1248d885eeb337b07e0d55fddaa77084c8
    </div>
  )
}

export default Back;