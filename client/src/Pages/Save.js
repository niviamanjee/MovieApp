import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
import "../App.css";

function Save() {
    // Setting our component's initial state
    const { savedShows } = useContext(SearchContext);

    console.log("saved shows: ", savedShows);

    // const { showSearch, shows, handleSubmit, handleInputChange } = useContext(SearchContext)

    return (
        <div>
            <br></br>
            <h2 className="gold centered">Saved Shows</h2>
            <div> {savedShows.map(show =>
                <div key={show.key}>
                    <img src={show.imageUrl} alt={show.title}></img>
                    <p>{show.title}</p>
                    <p>Creators: {show.creator}</p>
                    <p>{show.synopsis}</p>
                </div>
            )}</div>
        </div>
    )
}

export default Save;
