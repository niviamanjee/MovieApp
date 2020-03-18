import React, { useContext } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import SearchContext from "../../utils/SearchContext"

function Back() {

  const { show, saveCardShow, streaming } = useContext(SearchContext)
  console.log(streaming)
  const { title, id, summary, image, creators, actors, episode_time, genres, networks, episodes_number, seasons_number, first_air_date, rating } = show
  var streamingViews = streaming.map(stream => (

    <li key={streaming.service} ><a class="btn btn-outline-danger btn-sm" onClick={() => window.open(stream.url, "_blank")} role="button">{stream.service}</a></li>
  ))
  console.log(streamingViews)

  return (
    <div className="back">
      <p className="show-description">
        {summary}
      </p>
      <hr />
      <p className="show-creators"><b>Created by </b>{creators}</p>
      <p className="show-stars"><b>Starring </b>{actors}</p>
      <hr />
      <p className="show-seasons"><b>Seasons: </b>{seasons_number}</p>
      <p className="show-episodes"><b>Episodes: </b>{episodes_number}</p>
      <p className="show-ep-time"><b>Runtime: </b>{episode_time}</p>
      <p className="show-premiere"><b>Premiered: </b>{first_air_date}</p>
      <p className="show-genres"><b>Genres: </b>{genres}</p>
      <p className="show-networks"><b>Network(s): </b>{networks}</p>
      <hr />
      <a class="btn btn-outline-danger btn-sm" href="#" role="button">YouTube It!</a>
      <ul>
        {streamingViews}
      </ul>
      <button class="btn btn-outline-danger btn-sm" onClick={() => saveCardShow(id, image, title, creators, summary)}> Save Card</button>
    </div>
  )
}

export default Back;