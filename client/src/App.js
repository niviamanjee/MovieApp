import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Card from './Components/Card/index.js';
import CardTV from './Components/CardTV/index.js';
import NavBar from './Components/NavBar';
import API from "./utils/API";
import Wrapper from "./Components/Wrapper"
// import BlogCard from './Components/BlogCard/index.js';
import ShowSearch from "./Pages/ShowSearch"
import Save from "./Pages/Save"
import MovieSearch from "./Pages/MovieSearch"
import SearchContext from './utils/SearchContext';
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
  });

  // useEffect(() => {
  //   loadShows()
  // }, [state.showSearch])
  useEffect(() => {
    saveCard()
  }, [state.saved])

  const handleInputChange = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    console.log(event.target.value);
    setState({ ...state, showSearch: event.target.value })
  };
  
  const handleInputChangeMovies = (event) => {
    event.preventDefault();
    setState({ ...state, movieSearch: event.target.value })
    // console.log(state.showSearch)
  };

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
  };

  const handleSubmitMovies = (event) => {
    event.preventDefault();
      // Call Movie API from the backend through Utils folder
      API.getMovies(state.movieSearch)
      .then(res => {
        console.log("jadksflaksfh")
        console.log(res.data)
        setState({ ...state, movie: res.data })
        }
      )
      .catch(err => console.log(err));
    }
  
  const flip = () => {
    setState({ ...state, flipped: !state.flipped });
  }

  const saveCard = (id, title, creators, summary) => {
    console.log(`Card ID: ${id}`)
    console.log(`Card Title: ${title}`)
    console.log(`Card Summary: ${summary}`)
    console.log(`Card Creators: ${creators}`)
    //create filter if/then that filters card based on whether it's a movie or show
    //if movie: set up cardData to match movieSchema
    //if show:set up cardData to match showSchema
    // call appropriate functions based on filter 

    var cardData = {
      id: id,
      title: title,
      creator: creators,
      synopsis: summary
    }
    console.log(cardData)

    API.saveShowCard(cardData).then()

    // const handleBtnClick = event => {
    //   console.log(state)
    // }
  }
  return (
    <SearchContext.Provider value={{ ...state, handleSubmit, handleSubmitMovies, handleInputChange,handleInputChangeMovies, flip, saveCard }}>
      <Router>
        <div className="page-container">
          <NavBar />
          {/* <Jumbotron /> */}
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/shows" component={ShowSearch} />
            <Route exact path="/save" component={Save} />
            <Route exact path="/movies" component={MovieSearch} />
          </Wrapper>
          {/* <Card/> */}
          {/* <Footer></Footer> */}
        </div>
      </Router>
    </SearchContext.Provider>
  )
}

export default App;
