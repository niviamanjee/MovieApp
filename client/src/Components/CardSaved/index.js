import React, {useContext} from "react";
import '../../Components/Card/card.css';
import SearchContext from "../../utils/SearchContext"
import Front from '../Front/saved';
import Back from '../Back/saved';
import MovieSearch from "../../Pages/MovieSearch";

const CardSaved = ({title,titleS, mediaType, airedDate, released, rating, overview, image}) => {
    const { show, movie, movieSearch, flip, flipped,  saveCard, handleSubmitMoreInfo } = useContext(SearchContext)
    // const {title, released, overview } = movie
    // console.log(movie)
    return (        
      <>
        <div className= "flip-card col-3.5">
        <div className= "flip-card-inner">
            <Front
            title ={title}
            released ={released}
            overview = {overview}
            image = {image}
            mediaType = {mediaType}
            />
            <Back 
            title ={title}
            released ={released}
            airedDate = {airedDate}
            overview = {overview} 
            rating = {rating}
            image = {image}
            />
        </div>
        </div>

</>
    )
}

export default CardSaved;
