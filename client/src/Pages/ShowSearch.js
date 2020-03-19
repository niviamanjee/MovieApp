import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
import CardTV from "../Components/CardTV";
import "./MovieSearch.css"

function ShowSearch() {
    // Setting our component's initial state
    const { showSearch, show, handleSubmitShows, handleInputChange, saveCardShow } = useContext(SearchContext)
    // const [formObject, setFormObject] = useState({})

    return (
        <div className="container xxx">
            <form>
                <div className="form-group">
                    <label>Search for Shows</label>
                    <input id="query-input" className="form-control" onChange={handleInputChange}></input>
                </div>
                <button type="submit" className="btn-lg" onClick={handleSubmitShows}>Search</button>
            </form>
            <div className=' wrapper'>
                <div className="row">
                    <CardTV show={show} showSearch={showSearch} saveCardShow={saveCardShow}></CardTV>
                </div>

            </div>

        </div>

    )
}

export default ShowSearch;