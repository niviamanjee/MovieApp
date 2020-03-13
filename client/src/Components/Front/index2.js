import React, { useContext } from 'react';
import '../../App.css';
import ImageArea from '../ImageArea/index';
import MainArea from '../MainArea/index';
import SearchContext from "../../utils/SearchContext";

function Front() {
    const { show } = useContext(SearchContext);

    return (
        <div className="front">
            <ImageArea show={show} />
            <MainArea show={show} />
        </div>
    )
}

export default Front;