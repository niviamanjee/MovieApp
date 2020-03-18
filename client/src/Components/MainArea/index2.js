import React, { useContext } from 'react';
import '../../App.css';
import SearchContext from '../../utils/SearchContext';

function MainArea() {
    const { show } = useContext(SearchContext)
    const { title, summary, image } = show;
    
    return (
        <div className="main-area">
            <h1 className="lead">
                {title}
            </h1>
            <div className="blog-post">
                <p className="show-description-abbreviated">
                    {summary}
                </p>
                <p className="read-more">Hover to Read More...</p>
            </div>
        </div>
    )
}

export default MainArea;