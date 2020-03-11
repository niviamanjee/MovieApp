import React from 'react';
import '../../App.css';

<<<<<<< HEAD
function MainArea(props){
        return (
            <div className="main-area">
                <div className="blog-post">
                    <p className="date">{new Date().toLocaleDateString()}</p>
                    <p className="blog-content">
                        Some sample text to demonstrate how these cards will work, including how they truncate long sentences.
=======
function MainArea() {
    return (
        <div className="main-area">
            <h1 className="lead">
                Avengers: Endgame (2019)
                </h1>
            <div className="blog-post">
                <p className="film-description-abbreviated">
                    After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.
>>>>>>> 8ff6bf4edf5d686ceb1bd75b7150755b9d5108e0
                </p>
                <p className="read-more">Hover to Read More...</p>
            </div>
<<<<<<< HEAD
        )
    }
=======
        </div>
    )
}
>>>>>>> 8ff6bf4edf5d686ceb1bd75b7150755b9d5108e0

export default MainArea;