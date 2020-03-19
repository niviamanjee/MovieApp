import React, { useContext } from 'react';
import '../../Components/Card/card.css';
import SearchContext from "../../utils/SearchContext";

function Front({ title, titleS, mediaType, released, overview, image }) {
    const { movie, movieSearch } = useContext(SearchContext);
    // const {title, released, overview } = useContext(movieSearch)

    return (
        <>
            <div className="flip-card-front">
                <div className="container">
                    <h1 className="lead">{title} {titleS} </h1>
                    <hr />
                    <div className="image-container">
                        <img className="card-image" src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} width="200" height="450" />
                    </div>
                    <hr />
                    <p>{mediaType}</p>
                </div>
            </div>
        </>
    )
}

export default Front;