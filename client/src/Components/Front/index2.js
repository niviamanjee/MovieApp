import React, { useContext } from 'react';
import '../../App.css';
import ImageArea from '../ImageArea/index2';
import MainArea from '../MainArea/index2';
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