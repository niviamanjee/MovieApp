import React, { useContext } from 'react';
import '../../Components/Card/card.css';
// import ImageArea from '../ImageArea/index2';
// import MainArea from '../MainArea/index2';
import SearchContext from "../../utils/SearchContext";

function Front() {
    const { show } = useContext(SearchContext);
    const { title, image, synopsis } = show

    return (
        <div className="flip-card-front">
            <div className="main-area">
                <h1 className="lead">{title}</h1>
                <div className="image-container">
                    <img className="card-image" src={image} alt={title} width="200" height="200" />
                </div>
            </div>
            <hr />
            <p className="film-runtime text-dark"><b>Overview: </b>{synopsis}</p>
            <hr />

        </div>
    )
}

export default Front;