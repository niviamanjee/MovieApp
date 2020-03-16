import React, { useContext } from 'react';
import '../../App.css';
import SearchContext from '../../utils/SearchContext';

function MainArea() {
    const { movie } = useContext(SearchContext)
    console.log(movie)

    const { title, summary, image } = movie;
    var card = movie.map((film, key) =>
        <div className="main-area">
            <h1 className="lead">
                {film.title}
            </h1>
            <div key={film.title} className="blog-post">
                <p className="film-description-abbreviated">
                    {film.summary}

                </p>
                <p className="read-more">Hover to Read More...</p>
            </div>
        </div>
    )

    return (
        <div>

            {card}
        </div>
    )
}

export default MainArea;