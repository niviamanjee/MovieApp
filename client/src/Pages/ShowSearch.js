import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
import Card from "../Components/Card"



function ShowSearch() {
    // Setting our component's initial state
    const { flipped, showSearch, show, handleSubmit, handleInputChange, saveCard } = useContext(SearchContext)
    // const [formObject, setFormObject] = useState({})


    return (
        <div>

            <form>
                <div className="form-group">
                    <label>Search for Show</label>
                    <div className="btn-group" data-toggle="buttons">
                        <label className="btn btn-primary"><input type="checkbox" /> Movie</label>
                        <label className="btn btn-primary"><input type="checkbox" />Show</label>
                    </div>
                    {/* <br></br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="movieFilter" value="option1"></input>
                        <label class="form-check-label" for="movieFilter">movie</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="showFilter" value="option2"></input>
                        <label class="form-check-label" for="showFilter">show</label>
                    </div> */}
                    <input id="query-input" className="form-control" onChange={handleInputChange}></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Search</button>
            </form>
            <Card flipped={flipped} show={show} showSearch={showSearch} saveCard={saveCard}></Card>
        </div>

    )
}

export default ShowSearch;
