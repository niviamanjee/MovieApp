import React, { useContext } from 'react';
import SearchContext from "../../utils/SearchContext"
import '../../App.css';

function ImageArea() {
    const { show, flipped } = useContext(SearchContext)
    const { title, id, summary, image, creators, episode_time, genres, networks, episodes_number, seasons_number, first_air_date, rating } = show;
    return (
        <div className="image-container">
            <div className="main-area">
                <h1 className="lead">{title}</h1>
                <div className="image-container">
                    <img className="card-image" src={image} alt={title} width="200" height="200" />
                </div>
            </div>
        </div>
    )
}
export default ImageArea;