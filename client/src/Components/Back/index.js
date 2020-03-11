<<<<<<< HEAD
import React from 'react';
import '../../App.css';

function Back() {
  return (
    <div className="back">
      <p className="film-description">
        After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.
        </p>
      <hr />
      <p className="film-directors"><b>Directed by </b>Anthony Russo, Joe Russo</p>
      <p className="film-writers"><b>Written by </b>Christopher Markus, Stephen McFeely</p>
      <p className="film-stars"><b>Starring </b>Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson</p>
      <hr />
      <a class="btn btn-outline-danger btn-sm" href="https://www.youtube.com/watch?v=hA6hldpSTF8" role="button">Official Trailer</a>
      <a class="btn btn-outline-danger btn-sm" href="https://www.youtube.com/results?search_query=avengers+endgame" role="button">YouTube It!</a>
      <hr />
      <p className="film-release-date"><b>Release (USA): </b>26 April 2019</p>
      <p className="film-runtime"><b>Runtime: </b>181 min.</p>
      <hr />
      <p className="imdb-rating"><b>IMDb Rating: </b>8.5 out of 10</p>
      <p className="rotten-tomatoes"><b>Rotten Tomatoes: </b>94 out of 100</p>
      <hr />
    </div>
  )
=======
import React, { Component } from 'react';

class Back extends Component {
    render() {
        return (
            <div className="back">
                <p>Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post.</p>
                <p>Bloggity bloggity bloggity blog. This would be the full text of the abbreviated blog post.</p>
            </div>
        )
    }
>>>>>>> ea9ed33a9494d1c6356b286616f83a09910bea21
}

export default Back;