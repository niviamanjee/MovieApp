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
    streaming: [],
    savedShows: [],
    saveCardClick: (event) => { },
    handleSubmit: (event) => { },
    handleSubmitMovies: (event) => { },
    handleSubmitMoreInfo: (event) => { },
    handleInputChange: (event) => { },
    handleInputChangeMovies: (event) => { },
    handleInputChange: (event) => { },
    flip: () => { },
    saveCardShow: () => { },
    saveCardMovie: () => { },
    getShowsSaved: () => { },
    getStreamingServices: () => {}
})

export default SearchContext;
