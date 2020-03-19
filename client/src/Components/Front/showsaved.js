import React from 'react';
import '../../Components/Card/card.css';


function Front({ title, imageUrl, rating }) {
    // const { savedShows } = useContext(SearchContext);

    // const {title, released, overview } = useContext(movieSearch)

    return (


        <>

            <div className="flip-card-front">
                <div className="main-area">
                    <h1 className="lead">{title} </h1>
                    <div className="image-container">
                        <img className="card-image" src={imageUrl} alt={title} width="200" height="450" />
                    </div>
                    <p>{rating}</p>

                </div>
            </div>

        </>

    )
}

export default Front;