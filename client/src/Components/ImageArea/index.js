import React, { useContext } from 'react';
import SearchContext from "../../utils/SearchContext"
import '../../App.css';

function ImageArea(props) {

    const { movie, flipped } = useContext(SearchContext)

    // const { title, image } = props.film
    console.log(props.movie)



    return (


        <div className="image-container">
            {/* <img className="card-image" key={title} src={image} alt={title}></img> */}
        </div>


    )
}
export default ImageArea;