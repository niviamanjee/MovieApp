import React, { useContext } from 'react';
import SearchContext from "../../utils/SearchContext"
import '../../App.css';

function ImageArea() {

    const { show, flipped } = useContext(SearchContext)
    const { title, id, summary, image, creators, episode_time, genres, networks, episodes_number, seasons_number, first_air_date, rating } = show
    return (
        <div className="image-container">
            <img className="card-image" src={image} alt={title}></img>

        </div>
    )
}
export default ImageArea;