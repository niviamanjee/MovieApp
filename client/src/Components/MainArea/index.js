import React, { useContext } from 'react';
import '../../App.css';
import SearchContext from '../../utils/SearchContext';

function MainArea() {
    const { movie } = useContext(SearchContext)

    const { title, summary, image } = movie;
    return (
        <div className="main-area">
            <h1 className="lead">
                {title}
            </h1>
            <div className="blog-post">
                <p className="film-description-abbreviated">
                    {summary}
                </p>
                <p className="read-more">Hover to Read More...</p>
            </div>
        </div>
    )
}

export default MainArea;