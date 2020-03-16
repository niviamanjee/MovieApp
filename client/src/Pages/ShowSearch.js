import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
import CardTV from "../Components/CardTV"
import NavBar from "../Components/NavBar";


function ShowSearch() {
    // Setting our component's initial state
    const { flipped, showSearch, show, handleSubmitShows, handleInputChange, saveCardShow } = useContext(SearchContext)
    // const [formObject, setFormObject] = useState({})

    return (
        <div>
            <NavBar />
            <form>
                <div className="form-group">
                    <label>Search for Show</label>
                    <input id="query-input" className="form-control" onChange={handleInputChange}></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitShows}>Search</button>
            </form>
            <CardTV flipped={flipped} show={show} showSearch={showSearch} saveCardShow={saveCardShow}></CardTV>
        </div>
    )
}

export default ShowSearch;
