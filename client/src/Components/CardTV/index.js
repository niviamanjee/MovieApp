import React, { useContext } from 'react';
import "../Card/card.css"
import SearchContext from "../../utils/SearchContext"
import Front from '../Front/index2';
import Back from '../Back/index2';

const CardTV = () => {
    const { show, saveCardShow } = useContext(SearchContext)
    return (
        <div className="flip-card col-3.5">
            <div className="flip-card-inner">


                <Front show={show} />
                <Back show={show} saveCardShow={saveCardShow} />

            </div>
        </div>
    )
}

export default CardTV;
