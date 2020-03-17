import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Card from './Components/Card/index.js';



import Home from "./Pages/Home"
import API from "./utils/API";
import NavBar from "./Components/NavBar";
import Wrapper from "./Components/Wrapper"
// import BlogCard from './Components/BlogCard/index.js';
import ShowSearch from "./Pages/ShowSearch"
import Save from "./Pages/Save"
import MovieSearch from "./Pages/MovieSearch"
import SearchContext from './utils/SearchContext';
//import 'bootstrap/dist/css/bootstrap.css';
import Jumbotron from './Components/Jumbotron';
// import 'bootstrap/dist/css/bootstrap.css';


  function App() {

  const [state, setState] = useState({
    // filter= "",
    saved: false,
    flipped: false,
    movieSearch: "",
    showSearch: "",
    trending:[],
    movie: [],
    show: {},
    moreInfo: ""
  })

  useEffect(() => {
    saveCard()
    loadTrending()
  }, [])

  const handleInputChange = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    console.log(event.target.value)
    setState({ ...state, showSearch: event.target.value })
    // console.log(state.showSearch)
  }
  
  const handleInputChangeMovies = (event) => {
    event.preventDefault();
    setState({ ...state, movieSearch: event.target.value })
    // console.log(state.showSearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state.showSearch)
    API.getShows(state.showSearch)
      .then(res => {
        console.log(res.data)
        setState({ ...state, show: res.data })
      }
      )
      .catch(err => console.log(err));
  }

 // Call Movie API from the backend through Utils folder
  const handleSubmitMovies = (event) => {
    event.preventDefault();
      API.getMovies(state.movieSearch)
      .then(res => {
        console.log(res.data)
        setState({ ...state, movie: res.data })
      }
      )
      .catch(err => console.log(err));
  }
  // Gather more information on the movie cards
  const handleSubmitMoreInfo = (event) => {
    event.preventDefault();
     
      API.getMoreInfo(state.moreInfo)
      .then(res => {
        console.log(res.data)
        setState({ ...state, moreInfo:  res.data})
      }
      )
      .catch(err => console.log(err));
  }

 //Set the trending movies/ shows on the home page
 function loadTrending() {
  API.getTrending(state.trending)
  .then(res => {
    // console.log(res.data)
    setState({ ...state, trending: res.data })
  }
  )
  .catch(err => console.log(err));
 } 

  
  const flip = () => {
    setState({ ...state, flipped: !state.flipped });
  }

  const saveCard = ( title, overview, released, rating, image) => {
    // console.log(`Card Title: ${title}`)
    // console.log(`Card Summary: ${overview}`)
    // console.log(`Card Creators: ${released}`)
    //create filter if/then that filters card based on whether it's a movie or show
    //if movie: set up cardData to match movieSchema
    //if show:set up cardData to match showSchema
    // call appropriate functions based on filter 
    var cardData = {
      title: title,
      overview: overview,
      released: released,
      rating: rating,
      image: image
    }
    console.log(cardData)
    API.saveMovieCard(cardData).then()
  }

  return (
    
    <SearchContext.Provider value={{ ...state, handleSubmit, handleSubmitMovies, handleInputChange,handleInputChangeMovies, flip, saveCard }}>
      <Router>
        <div className="page-container">
          <NavBar />
          <Jumbotron/>
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/shows" component={ShowSearch} />
            <Route exact path="/save" component={Save} />
            <Route exact path="/movies" component={MovieSearch} />
          </Wrapper>
        </div>
      </Router>
    </SearchContext.Provider>
  )


}

export default App;
