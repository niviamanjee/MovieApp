import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./style.css"
import SearchContext from '../../utils/SearchContext';

const NavBar = () => {
  const { getShowsSaved } = useContext(SearchContext)


  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">Project 3</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
          <Link className="nav-item nav-link" to="/save" onClick={getShowsSaved}>Saved</Link>
          <Link className="nav-item nav-link" to="/movies">Movies</Link>
          <Link className="nav-item nav-link" to="/shows">Shows</Link>

        </div>
      </div>
    </nav>
  )
}

export default NavBar;