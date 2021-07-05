import React from 'react';
import BtnDropit from "../buttons/BtnDropit";
import "./SearchBar.css";

function SearchBar() {
    return (
        <>
            <input type={"text"} id={"searchbar"} /><BtnDropit name={"Search"}/>
        </>
    );
}

export default SearchBar;