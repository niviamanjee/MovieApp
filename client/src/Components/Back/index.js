import React, { useContext } from 'react';
import '../../Components/Card/card.css';
import SearchContext from "../../utils/SearchContext"

function Back({title, released, airedDate, rating, overview}) {

  const { movie, saveCard, handleSubmitMoreInfo, moreInfo } = useContext(SearchContext)
  const { id, summary, directors, writers, actors, release, runtime } = movie
console.log(moreInfo)
  return (
    <div className="flip-card-back">
      <hr />
    <p className="film-release-date"><b>Release: </b>{released} {airedDate}</p>
      {/* <p className="film-runtime"><b>Overview: </b>{overview}</p> */}
      <hr />
      <p className="imdb-rating"><b>IMDb Rating: </b>{rating} out of 10</p>
      <hr/>
      <button className="btn-small" onClick = {handleSubmitMoreInfo}> More Info</button>
      {/* <p className="rotten-tomatoes"><b>Rotten Tomatoes: </b>94 out of 100</p> */}
      <hr />
      <button class="btn btn-outline-danger btn-sm" onClick={() => saveCard(id, title, directors, summary)}> Save Card</button>
    </div>
  )
}

export default Back;

   {/* <p className="film-description">
        {summary}
      </p>
      <hr />
      <p className="film-directors"><b>Directed by </b>{directors}</p>
      <p className="film-writers"><b>Written by </b>{writers}</p>
      <p className="film-stars"><b>Starring </b>{actors}</p>
      <hr /> */}
      {/* <a class="btn btn-outline-danger btn-sm" href="https://www.youtube.com/watch?v=hA6hldpSTF8" role="button">Official Trailer</a>
      <a class="btn btn-outline-danger btn-sm" href="https://www.youtube.com/results?search_query=avengers+endgame" role="button">YouTube It!</a> */}