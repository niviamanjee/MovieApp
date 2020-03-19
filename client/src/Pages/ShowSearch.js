import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
import CardTV from "../Components/CardTV";
import "./MovieSearch.css";

function ShowSearch() {
    // Setting our component's initial state
    const { flipped, showSearch, show, handleSubmitShows, handleInputChange, saveCardShow } = useContext(SearchContext)

    return (
        <div className="container xxx"> 
            <form>
                <div className="form-group">
                    <label className="lead">
                        <b>Search For a Show</b>
                    </label>
                    <hr></hr>
                        <input id="query-input" className="form-control" onChange={handleInputChange}></input>
                </div>
                <button type="submit" className="btn-lg" onClick={handleSubmitShows}>Search</button>
            </form>
            <CardTV flipped={flipped} show={show} showSearch={showSearch} saveCardShow={saveCardShow}/>
        </div>
    )
}

export default ShowSearch;