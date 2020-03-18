import React, { createContext } from 'react';

const SearchContext = createContext({
    filter: "",
    saved: false,
    flipped: false,
    movieSearch: "",
    showSearch: "",
    movie: [],
    show: {},
    streaming: [],
    savedShows: [],
    saveCardClick: (event) => { },
    handleSubmit: (event) => { },
    handleSubmitMovies: (event) => { },
    handleInputChange: (event) => { },
    handleInputChangeMovies: (event) => { },
    handleInputChange: (event) => { },
    flip: () => { },
    saveCardShow: () => { },
    saveCardMovie: () => { },
    getShowsSaved: () => { },
})

export default SearchContext;
