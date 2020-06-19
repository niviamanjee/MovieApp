import React, { useContext } from "react";
import Card from "../Components/Card"
import SearchContext from "..//utils/SearchContext"
import { Link } from "react-router-dom";
import "../home.css";
import Logo from '../clapperboard-logo-1.png';

function Home() {
    const { trending } = useContext(SearchContext)

    return (
        <>

            <div className="title-container centered">

                <img src={Logo} alt="Logo" className="center-photo rounded mx-auto d-block"></img>
                <div >
                    <h1 className="display-3">
                        <b>ClapperBoard</b>
                    </h1>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <br></br>
                    <button className="btn btn-outline-light btn-lg"><Link to="/movies" style={{ textDecoration: 'none' }}>Movie Search</Link></button>
                    <button className="btn btn-outline-light btn-lg"><Link to="/shows" style={{ textDecoration: 'none' }}>TV Search</Link></button>
                    <button className="btn btn-outline-light btn-lg"><Link to="/save" style={{ textDecoration: 'none' }}>Saved</Link></button>
                </div>
            </div>
            <br></br>
            <hr></hr>
            <br></br>

            <div className="container">

                <div class="jumbotron">
                    <div class="container text-center">
                        <h1 class="display-4">Top Trending Movies & Shows </h1>
                        <p class="lead">This week's trending movies and shows.</p>
                        <p></p>
                    </div>
                </div>

                <div className=''>
                    <div className="row">
                        {trending.map(result =>
                            (<Card
                                title={result.titleM}
                                titleS={result.titleS}
                                released={result.releaseDate}
                                airedDate={result.airedDate}
                                overview={result.overview}
                                image={result.poster}
                                rating={result.rating}
                                mediaType={result.mediaType}
                            />
                            ))}
                    </div>
                </div>
            </div>

        </>

    )
}

export default Home;