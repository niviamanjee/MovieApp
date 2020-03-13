import React from 'react';
import "./style.css"



const NavBar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">Project 3</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#">Saved</a>
          <a className="nav-item nav-link" href="#">Movies</a>
          <a className="nav-item nav-link" href="#">Shows</a>

        </div>
      </div>
    </nav>
  )
}

export default NavBar;