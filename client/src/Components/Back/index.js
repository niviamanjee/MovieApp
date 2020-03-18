import React, { useContext } from 'react';
import '../../App.css';
import SearchContext from "../../utils/SearchContext"

function Back() {

  const { movie, saveCard } = useContext(SearchContext)
  const { title, id, summary, directors, writers, actors, release, runtime } = movie

  return (
    <div className="back">
      <p className="film-description">
        {summary}
      </p>
      <hr />
      <p className="film-directors"><b>Directed by </b>{directors}</p>
      <p className="film-writers"><b>Written by </b>{writers}</p>
      <p className="film-stars"><b>Starring </b>{actors}</p>
      <hr />
      <a class="btn btn-outline-danger btn-sm" href="https://www.youtube.com/watch?v=hA6hldpSTF8" role="button">Official Trailer</a>
      <a class="btn btn-outline-danger btn-sm" href="https://www.youtube.com/results?search_query=avengers+endgame" role="button">YouTube It!</a>
      <hr />
      <p className="film-release-date"><b>Release (USA): </b>{release}</p>
      <p className="film-runtime"><b>Runtime: </b>{runtime}</p>
      <hr />
      <p className="imdb-rating"><b>IMDb Rating: </b>8.5 out of 10</p>
      <p className="rotten-tomatoes"><b>Rotten Tomatoes: </b>94 out of 100</p>
      <hr />
      <button class="btn btn-outline-danger btn-sm" onClick={() => saveCard(id, title, directors, summary)}> Save Card</button>
    </div>
  )
}

export default Back;