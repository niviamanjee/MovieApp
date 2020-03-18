import React, {useContext} from "react";
import '../../Components/Card/card.css';
import SearchContext from "../../utils/SearchContext"
import Front from '../Front/index';
import Back from '../Back/index';
import MovieSearch from "../../Pages/MovieSearch";

const Card = ({title,titleS, mediaType, airedDate, released, rating, overview, image}) => {
    const { show, movie, movieSearch, flip, flipped,  saveCard, handleSubmitMoreInfo } = useContext(SearchContext)
    // const {title, released, overview } = movie
    // console.log(movie)
    return (        
      <>
        <div className= "flip-card col-3.5">
        <div className= "flip-card-inner">
            <Front
            title ={title}
            titleS = {titleS}
            released ={released}
            overview = {overview}
            image = {image}
            mediaType = {mediaType}
            />
            <Back 
            title ={title}
            titleS = {titleS}
            released ={released}
            airedDate = {airedDate}
            overview = {overview} 
            rating = {rating}
            moreInfo = {handleSubmitMoreInfo}
            image = {image}
            mediaType = {mediaType}
            />
        </div>
        </div>

</>
    )
}

export default Card;
