import React, { useContext } from 'react';
import '../../App.css';
import SearchContext from '../../utils/SearchContext';

function MainArea() {
    const { movie, movieSearch } = useContext(SearchContext)
    // const {title, released, overview } = useContext(movieSearch)



         
    return (
        <>
        </>
        // <div>
        //     {movie.map(result => 
        //         ( 
        //         <div className="main-area">

        //         <h1 className="lead">
        //         {result.title}
        //         </h1>
        //         <div className="blog-post">
        //             <p className="film-description-abbreviated">
        //             {result.released}
        //             </p>
        //             <p className="read-more">
        //                 {result.overview}
        //             </p>
        //         </div>
        //         </div>
        //          ))}
        // </div>
)  
}

export default MainArea;