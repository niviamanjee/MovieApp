import React, { useState } from 'react';



const SearchBar = () =>{
    const [searchedMovie, setSearchMovie] = useState();
    // handles the user's clicks
    
    const handleSearch = e => {
        e.preventDefault();
        // console.log(e.target.value)
        console.log("You searched: " + searchedMovie); 
    };


return (
<form onSubmit={handleSearch}>

<div className="input-group mb-3" >
    
  <input type="text" className="form-control" placeholder="Search Movies/ Shows..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={e => setSearchMovie(e.target.value)}></input>
  
  <div className="input-group-append">
    <button className="btn btn-outline-secondary bg-success text-dark" type="submit" id="button-addon2">Search</button>
  </div>

</div>
</form>
        )
}

export default SearchBar;