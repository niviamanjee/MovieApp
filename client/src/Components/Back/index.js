import React, { useContext } from 'react';
import '../../Components/Card/card.css';
import SearchContext from "../../utils/SearchContext"

function Back({title, titleS, released, airedDate, rating, overview, image, mediaType}) {

  const { movie, saveCard, handleSubmitMoreInfo, moreInfo, streaming } = useContext(SearchContext)
  const { id, summary, directors, writers, actors, release, runtime } = movie
console.log(streaming)
  return (
    <>
    <div className="flip-card-back">
      <div className='container'>
      <p className="release-date"><b>Release: </b>{released} {airedDate}</p>
      <hr/>
      <p className="film-runtime"><b>Overview: </b>{overview}</p>
      <hr />
      <p className="imdb-rating" alt= {image}><b>IMDb Rating: </b>{rating} out of 10</p>
      <hr/>
      <p><b> </b>Streaming Services:</p>
        {streaming.map(result => (
          <>
          <a href={result.url} target="_blank"><p>{result.service} </p></a>
          
        </>
        ))}
      
      
      <button class="btn btn-outline-danger btn-sm" onClick={() => saveCard( title, titleS, overview, airedDate, released, rating, image)}> Save Card <i class="fas fa-save"></i></button>
      <hr />
      </div>
      
    </div>
    </>
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