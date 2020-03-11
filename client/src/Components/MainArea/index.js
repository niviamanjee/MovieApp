import React from 'react';
import '../../App.css';

function MainArea() {
    return (
        <div className="main-area">
            <h1 className="lead">
                Avengers: Endgame (2019)
                </h1>
            <div className="blog-post">
                <p className="film-description-abbreviated">
                    After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.
                </p>
                <p className="read-more">Hover to read more...</p>
            </div>
        </div>
    )
}

export default MainArea;