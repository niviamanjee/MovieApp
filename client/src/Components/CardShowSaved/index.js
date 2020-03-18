import React, { useContext } from "react";
import '../../Components/Card/card.css';
import SearchContext from "../../utils/SearchContext"
import Front from '../Front/showsaved';
import Back from '../Back/showsaved';


const CardShowSaved = () => {
    const { savedShows } = useContext(SearchContext);
    // const {title, released, overview } = movie

    return (
        <>
            <div className="flip-card col-3.5">
                <div className="flip-card-inner">
                    <Front
                        savedShows={savedShows}
                    />
                    <Back
                        savedShows={savedShows}
                    />
                </div>
            </div>

        </>
    )
}

export default CardShowSaved;
