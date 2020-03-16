import React, { useContext } from 'react';
import '../../App.css';
import React, { useContext } from "react";
import SearchContext from "../../utils/SearchContext"
import Front from '../Front/index';
import Back from '../Back/index';

const Card = () => {
<<<<<<< HEAD
    const { show, flipped, flip, saveCard } = useContext(SearchContext)
=======
    const { movie, flipped, flip } = useContext(SearchContext)
>>>>>>> ae04f3c991b5fa00ae7da61924ed23e232fdcf36

    var cardArray = movie.map((film, key) =>
        <div onMouseEnter={flip} onMouseLeave={flip} key={film.key} className={"card-container" + (flipped ? " flipped" : "")}>
            <Front film={film} />
            <Back film={film} />
        </div>
    )
    return (
<<<<<<< HEAD
            <div onMouseEnter={flip} onMouseLeave={flip} className={"card-container" + (flipped ? " flipped" : "")}>
                <Front show={show} />
                <Back show={show} saveCard={saveCard} />
            </div>
=======
        <div>
            {cardArray}
        </div>
>>>>>>> ae04f3c991b5fa00ae7da61924ed23e232fdcf36
    )
}

export default Card;
