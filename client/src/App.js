import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home"

import API from "./utils/API";
import Wrapper from "./Components/Wrapper"
// import BlogCard from './Components/BlogCard/index.js';
import ShowSearch from "./Pages/ShowSearch"
import Save from "./Pages/Save"
import MovieSearch from "./Pages/MovieSearch"
import SearchContext from './utils/SearchContext';
//import 'bootstrap/dist/css/bootstrap.css';=======
import Jumbotron from './Components/Jumbotron';
// import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const [state, setState] = useState({
    // filter= "",
    saved: false,
    flipped: false,
    movieSearch: "",
    showSearch: "",
    movie: [],
    show: {},
    streaming: [],
    savedShows: []
  });
  
  useEffect(() => {
    saveCardShow()
    getStreamingServices(state.showSearch)
    getStreamingServices(state.movieSearch)
  }, [state.saved, state.show, state.movie])

  useEffect(() => {
    getShowsSaved()
  }, [])

  const handleInputChange = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    console.log(event.target.value);
    setState({ ...state, showSearch: event.target.value })
    // console.log(state.showSearch)
  }

  const handleInputChangeMovies = (event) => {
    event.preventDefault();
    setState({ ...state, movieSearch: event.target.value })
    // console.log(state.showSearch)
  };

  const handleSubmitShows = (event) => {
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

  const getShowsSaved = async () => {
    await API.getSavedShows()
      .then(res => {
        console.log("data of saved shows: ", res.data)
        setState({ ...state, savedShows: res.data })
      })
  }

  const handleSubmitMovies = async (event) => {
    event.preventDefault();
    // Call Movie API from the backend through Utils folder
    await getStreamingServices(state.movieSearch)
    API.getMovies(state.movieSearch)
      .then(res => {
        console.log("jadksflaksfh")
        console.log(res.data)
        setState({ ...state, movie: res.data })
        }
      )
      .catch(err => console.log(err));
  }

  const getStreamingServices = (query) => {
    API.getStreaming(query)
      .then(res => {
        console.log("Streaming data:", res.data)
        setState({ ...state, streaming: res.data })
        console.log("streaming state:", state.streaming)
      })
  }
  
  const flip = () => {
    setState({ ...state, flipped: !state.flipped });
  }

  const saveCardShow = (id, image, title, creators, summary) => {
    console.log(`Card ID: ${id}`)
    console.log(`Card Title: ${title}`)
    console.log(`Card Summary: ${summary}`)
    console.log(`Card Creators: ${creators}`)
    //create filter if/then that filters card based on whether it's a movie or show
    //if movie: set up cardData to match movieSchema
    //if show:set up cardData to match showSchema
    // call appropriate functions based on filter 

    var cardData = {
      title: title,
      imageUrl: image,
      creator: creators,
      synopsis: summary
    }
    // console.log(cardData)
    API.saveShowCard(cardData).then()
  }

  const saveCardMovie = (id, title, director, summary) => {
    console.log(`Card ID: ${id}`)
    console.log(`Card Title: ${title}`)
    console.log(`Card Summary: ${summary}`)
    console.log(`Card Director: ${director}`)
    //create filter if/then that filters card based on whether it's a movie or show
    //if movie: set up cardData to match movieSchema
    //if show:set up cardData to match showSchema
    // call appropriate functions based on filter 

    var cardData = {
      title: title,
      director: director,
      synopsis: summary
    }
    // console.log(cardData)
    API.saveShowMovie(cardData).then()
  }

  return (
    <SearchContext.Provider value={{ ...state, handleSubmitShows, handleSubmitMovies, handleInputChange, handleInputChangeMovies, flip, saveCardShow, saveCardMovie, getStreamingServices, getShowsSaved }}>
      <Router>
        <div className="page-container">
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
