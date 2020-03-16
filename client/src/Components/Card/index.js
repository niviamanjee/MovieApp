import React, { useContext } from 'react';
import '../../App.css';
import SearchContext from "../../utils/SearchContext"
import Front from '../Front/index';
import Back from '../Back/index';

const Card = () => {
    const { show, flipped, flip, saveCard } = useContext(SearchContext)

    return (
            <div onMouseEnter={flip} onMouseLeave={flip} className={"card-container" + (flipped ? " flipped" : "")}>
                <Front show={show} />
                <Back show={show} saveCard={saveCard} />
            </div>
    )
}

export default Card;
