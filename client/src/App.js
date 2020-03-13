import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Card from './Components/Card/index.js';
// import MovieSearch from './Pages/MovieSearch';
import NavBar from './Components/NavBar';



import API from "./utils/API";
import Wrapper from "./Components/Wrapper"
// import BlogCard from './Components/BlogCard/index.js';
import Search from "./Pages/Search"
import Save from "./Pages/Save"
import MovieSearch from "./Pages/MovieSearch"
import SearchContext from './utils/SearchContext';
import Jumbotron from './Components/Jumbotron';
// import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const [state, setState] = useState({
    movieSearch: "",
    showSearch: "",
    movie: [],
    show: {},
  })

  // useEffect(() => {
  //   loadShows()
  // }, [state.showSearch])


  const handleInputChange = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
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

  // const handleBtnClick = event => {
  //   console.log(state)
  // }
  return (
    
    <SearchContext.Provider value={{ ...state, handleSubmit, handleSubmitMovies, handleInputChange, handleInputChangeMovies }}>

      <Router>
        <div>
          {/* <Navbar></Navbar> */}
          <NavBar/>
          <Jumbotron/>
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/save" component={Save} />
            <Route exact path="/movies" component={MovieSearch} />

          </Wrapper>
          <Card/>
          {/* <Footer></Footer> */}
        </div>
      </Router>
    </SearchContext.Provider>
  )

}

export default App;
