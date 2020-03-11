import React, { useContext } from 'react';
import '../../App.css';
import ImageArea from '../ImageArea/index';
import MainArea from '../MainArea/index';
import SearchContext from "../../utils/SearchContext"

function Front() {
    const { show } = useContext(SearchContext)
    const { title, id, summary, image, creators, episode_time, genres, networks, episodes_number, seasons_number, first_air_date, rating } = show
    return (
        <div className="front">
            <ImageArea />
            <MainArea />

        </div>
    )
}


export default Front;