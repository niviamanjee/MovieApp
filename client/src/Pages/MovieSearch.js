import React, { useState, useEffect } from 'react';
// import './App.css';
import API_URL from "../utils/API"
import axios from 'axios';
import Jumbotron from '../Components/Jumbotron';
import SearchBar from '../Components/SearchBar';
import BlogCard from '../Components/BlogCard';


function MovieSearch() {
    const [movies, setMovies] = useState([]);
//   state = {
//     movies:[],
//     titles: '',
//     releaseDates: '',
//     overviews: '',
//     searched: ''
//   }
  
    useEffect(() => {
        loadMovies();
    }, [])

  function loadMovies() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      setMovies(data.results);
      
      console.log(movies)
      
    //     this.setState({ movies: data.results })
    //     // console.log(this.state.movies[0].title)
    //   //   //loops through movies to get titles, release data, overview
    //   for (var i = 0; i < data.results.length; i ++) {
    //     this.setState({ titles: data.results[i].title })
    //     this.setState({ releaseDates: data.results[i].release_date }) 
    //     this.setState({ overviews: data.results[i].overview })
       
    //     // console.log(this.state.titles +"\n" + "\n"+ this.state.releaseDates +"\n" + "\n" + this.state.overviews + '\n')
    //   }
//    console.log(movies)    
     })
  }
    
    // console.log()
  return (
      
      <>
    <div className="container">
    <Jumbotron/>
      <SearchBar/>
     <div className="col-xs-8">
    
         <BlogCard
        //  movieTitle = {this.state.movies.results[0].title}
         />

     </div>
    </div>
    </>
 );
}


export default MovieSearch
