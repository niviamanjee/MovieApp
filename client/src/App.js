import React, { Component } from 'react';
import './App.css';
import BlogCard from './Components/BlogCard/index.js';
import MovieSearch from './Pages/MovieSearch';
import NavBar from './Components/NavBar';



class App extends Component {
  render() {
    return (
     
      <div className="page-container">
        <NavBar/>
        <MovieSearch/>
        {/* <BlogCard /> */}
        {/* <footer>
          Image credit: <a href="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png">8pxl on Tumblr</a>
        </footer> */}
      </div>
    )
  }
}

export default App;
