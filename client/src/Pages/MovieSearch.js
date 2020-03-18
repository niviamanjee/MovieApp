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
          <br></br>
          <form>
            <div className="form-group">
              <label className="lead gold"><b>Search For a Movie</b></label>
              <hr></hr>
                <input id="query-input" className="form-control" onChange={handleInputChangeMovies}></input>
            </div>
            <button type="submit" className="btn btn-outline-light" onClick={handleSubmitMovies}>Search</button>
          </form>
          <Card flipped={flipped} movie={movie} movieSearch={movieSearch} ></Card>
        </div>
    )
}

export default MovieSearch;