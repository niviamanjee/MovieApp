import React, { createContext } from 'react';

const SearchContext = createContext({
    movieSearch: "",
    showSearch: "",
    movie: {},
    show: {},
    handleBtnClick: (event) => { },
    handleSubmit: (event) => { },
    handleInputChange: (event) => { }
})

export default SearchContext;
