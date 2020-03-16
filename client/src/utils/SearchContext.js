import React, { createContext } from 'react';

const SearchContext = createContext({
    filter: "",
    saved: false,
    flipped: false,
    movieSearch: "",
    showSearch: "",
    movie: [],
    show: {},
    trending: [],
    moreInfo:{},
    saveCardClick: (event) => { },
    handleSubmit: (event) => { },
    handleSubmitMovies: (event) => { },
    handleSubmitMoreInfo: (event) => { },
    handleInputChange: (event) => { },
    handleInputChangeMovies: (event) => { },
    handleInputChange: (event) => { },
    flip: () => { },
    saveCard: () => { },
})

export default SearchContext;
