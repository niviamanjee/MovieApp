import '../../App.css';
import React, { useContext } from "react";
import SearchContext from "../../utils/SearchContext"
import Front from '../Front/index';
import Back from '../Back/index';

const Card = () => {
    const { movie, flipped, flip } = useContext(SearchContext)

    var cardArray = movie.map((film, key) =>
        <div onMouseEnter={flip} onMouseLeave={flip} key={film.key} className={"card-container" + (flipped ? " flipped" : "")}>
            <Front film={film} />
            <Back film={film} />
        </div>
    )
    return (
        <div>
            {cardArray}
        </div>
    )
}

export default Card;
