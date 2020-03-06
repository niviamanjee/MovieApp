import React, { Component } from 'react';
import '../../App.css';

class Back extends Component {
  render() {
    return (
      <div className="back">
        <p className="film-description">
          After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.
        </p>
        <hr />
        <p className="film-directors"><b>Directed by </b>Anthony Russo, Joe Russo</p>
        <p className="film-writers"><b>Written by </b>Christopher Markus, Stephen McFeely</p>
        <p className="film-stars"><b>Starring </b>Robert Downey Jr., Chris Evans, Mark Ruffalo</p>
        <hr />
        <p className="film-website"><a href="https://movies.disney.com/avengers-endgame">Official Website</a></p>
        <p className="film-trailer"><a href="https://www.youtube.com/watch?v=hA6hldpSTF8">Official Trailer</a></p>
        <hr />
        <p className="film-release-date"><b>Release (USA): </b>26 April 2019</p>
        <p className="film-runtime"><b>Runtime: </b>181 min.</p>
      </div>
    )
  }
}

export default Back;