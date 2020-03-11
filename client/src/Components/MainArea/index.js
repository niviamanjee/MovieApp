import React from 'react';
import '../../App.css';

<<<<<<< HEAD
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
=======
class MainArea extends Component {
    render() {
        return (
            <div className="main-area">
                <div className="blog-post">
                    <p className="date">{new Date().toLocaleDateString()}</p>
                    <p className="blog-content">
                        Some sample text to demonstrate how these cards will work, including how they truncate long sentences.
                </p>
                    <p className="read-more">Hover to read more...</p>

                </div>

>>>>>>> ea9ed33a9494d1c6356b286616f83a09910bea21
            </div>
        </div>
    )
}

export default MainArea;