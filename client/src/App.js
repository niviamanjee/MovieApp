import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
<<<<<<< HEAD
import Card from './Components/Card/index';

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Card />
        <footer>
          This footer brought to you by: PNP Enterprises, LLC. Copyright 2020
        </footer>
      </div>
    )
=======
import API from "./utils/API";
// import Navbar from "./Components/Navbar"
import Wrapper from "./Components/Wrapper"
// import BlogCard from './Components/BlogCard/index.js';
import Search from "./Pages/Search"
import Save from "./Pages/Save"
import SearchContext from './utils/SearchContext';
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const [state, setState] = useState({
    movieSearch: "",
    showSearch: "",
    movie: {},
    show: {},
  })

  // useEffect(() => {
  //   loadShows()
  // }, [state.showSearch])


  const handleInputChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    setState({ ...state, showSearch: event.target.value })
    console.log(state.showSearch)
>>>>>>> c5d6ac72f9e9503c31abaf8e9a80ba5e37c36a8e
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


  // const handleBtnClick = event => {
  //   console.log(state)
  // }
  return (
    <SearchContext.Provider value={{ ...state, handleSubmit, handleInputChange }}>
      <Router>
        <div>
          {/* <Navbar></Navbar> */}
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/save" component={Save} />

          </Wrapper>
          {/* <Footer></Footer> */}
        </div>
      </Router>
    </SearchContext.Provider>
  )

}

export default App;