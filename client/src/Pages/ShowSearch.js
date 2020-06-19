import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
import CardTV from "../Components/CardTV";
import "./MovieSearch.css"
import Logo from "../clapperboard-logo-1.png"

function ShowSearch() {
    // Setting our component's initial state
    const { showSearch, show, handleSubmitShows, handleInputChange, saveCardShow } = useContext(SearchContext)
    // const [formObject, setFormObject] = useState({})

    return (
        <>
            <div className='container logo-holder'>
                <img src={Logo} alt="Logo" className="center-photo rounded mx-auto d-block"></img>
                <div className='movie-holder'>
                    <h1 className='movieTitle'> <span><i class="fas fa-ticket-alt"></i></span> SHOWS
                <span> <i class="fas fa-ticket-alt"></i></span>
                    </h1>
                    {/* SEARCH BAR */}
                    <div class="container input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary" type="submit" id="button-addon1" onClick={handleSubmitShows}>Search</button>
                        </div>
                        <input id="query-input" type="text" class="form-control" placeholder="Search for Shows..." aria-label="" aria-describedby="button-addon1" onChange={handleInputChange}></input>
                    </div>
                </div>
            </div>

            <div className=' container xxx'>
                <div className="row">
                    <CardTV show={show} showSearch={showSearch} saveCardShow={saveCardShow}></CardTV>
                </div>

            </div>

       </>

    )
}

export default ShowSearch;