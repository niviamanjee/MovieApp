import React, { createContext } from 'react';

const SearchContext = createContext({
    movieSearch: "",
    showSearch: "",
    movie: [],
    show: {},
    handleBtnClick: (event) => { },
    handleSubmit: (event) => { },
    handleSubmitMovies: (event) => { },
    handleInputChange: (event) => { },
    handleInputChangeMovies: (event) => { }
})

export default SearchContext;
