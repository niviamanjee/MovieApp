import React, { useContext } from "react";
import '../../Components/Card/card.css';
// import SearchContext from "../../utils/SearchContext"
import Front from '../Front/showsaved';
import Back from '../Back/showsaved';


const CardShowSaved = ({ imageUrl, title, creator, synopsis, episode_time,
    genres, networks, episodes_number, seasons_number, first_air_date, rating, cardId, deleteCardShow }) => {

    // const {title, released, overview } = movie

    return (
        <>
            <div className="flip-card col-3.5" key={cardId}>
                <div className="flip-card-inner">
                    <Front
                        title={title}
                        imageUrl={imageUrl}
                    />
                    <Back
                        creator={creator}
                        synopsis={synopsis}
                        episode_time={episode_time}
                        genres={genres}
                        networks={networks}
                        episodes_number={episodes_number}
                        seasons_number={seasons_number}
                        first_air_date={first_air_date}
                        rating={rating}
                        cardId={cardId}
                        deleteCardShow={deleteCardShow}
                    />
                </div>
            </div>

        </>
    )
}

export default CardShowSaved;
