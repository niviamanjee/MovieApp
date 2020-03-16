import React, { useContext } from 'react';
import '../../App.css';
import SearchContext from "../../utils/SearchContext"
import Front from '../Front/index2';
import Back from '../Back/index2';

const CardTV = () => {
<<<<<<< HEAD
    const { show, flipped, flip, saveCard } = useContext(SearchContext)
=======
    const { show, flipped, flip, saveCardShow } = useContext(SearchContext)
>>>>>>> ae04f3c991b5fa00ae7da61924ed23e232fdcf36
    return (
        <div>
            <div onMouseEnter={flip} onMouseLeave={flip} className={"card-container" + (flipped ? " flipped" : "")}>
                <Front show={show} />
                <Back show={show} saveCardShow={saveCardShow} />
            </div>
        </div>
    )
}

export default CardTV;
