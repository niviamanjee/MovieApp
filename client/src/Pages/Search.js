import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


function Shows() {
    // Setting our component's initial state
    const [shows, setShows] = useState([])
    // const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadShows()
    }, [])

    // Loads all books and sets them to books
    function loadShows() {
        API.getShows("The Simpsons")
            .then(res => {

                setShows(res.data)
                console.log(res.data)
            }
            )
            .catch(err => console.log(err));
    };


    return (
        <div> {shows}</div>

    );
}


export default Shows;
