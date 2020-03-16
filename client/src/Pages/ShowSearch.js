import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
import CardTV from "../Components/CardTV";
import '../App.css';

function ShowSearch() {
    // Setting our component's initial state
    const { flipped, showSearch, show, handleSubmit, handleInputChange, saveCard } = useContext(SearchContext)
    // const [formObject, setFormObject] = useState({})

    return (
        <div>
            <form>
                <div className="form-group">
                    <br></br>
                    <h6 className="lead">Search for Show</h6>
                    <hr></hr>
                    <input id="query-input" className="form-control" onChange={handleInputChange}></input>
                </div>
                <button type="submit" className="btn btn-dark" onClick={handleSubmit}>Search</button>
            </form>
            <div className="row">
                <div className="col">
                    <CardTV flipped={flipped} show={show} showSearch={showSearch} saveCard={saveCard}></CardTV>
                </div>
            </div>
        </div>
    )
}

export default ShowSearch;
