import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
import Card from "../Components/Card";
import "../App.css";

function MovieSearch() {
    // Setting our component's initial state
    const { flipped, movieSearch, movie, handleSubmitMovies, handleInputChangeMovies, saveCard } = useContext(SearchContext)
    // const [formObject, setFormObject] = useState({})

    return (
      <div>
        <form>
          <div className="form-group">
            <br></br>
            <h6 className="lead">Search for Movie</h6>
            <hr></hr>
            <input id="query-input" className="form-control" onChange={handleInputChangeMovies}></input>
          </div>
            <button type="submit" className="btn btn-dark" onClick={handleSubmitMovies}>Search</button>
        </form>
        <div className="row">
          <div className="col">
          <Card flipped={flipped} movie={movie} movieSearch={movieSearch} saveCard={saveCard}></Card>
          </div>
        </div>
      </div>
    )
}

export default MovieSearch;