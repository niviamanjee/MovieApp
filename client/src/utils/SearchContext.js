import React, { createContext } from 'react';

const SearchContext = createContext({
    flipped: false,
    movieSearch: "",
    showSearch: "",
    movie: {},
    show: {},
    handleBtnClick: (event) => { },
    handleSubmit: (event) => { },
    handleInputChange: (event) => { },
    flip: () => { },
})

export default SearchContext;
