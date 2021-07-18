import React from 'react';
import "./SearchBar.css";
import {NavLink} from "react-router-dom";

function SearchBar() {
    return (
        <>
            <input type={"search"} id={"searchbar"} />
            <NavLink to={"/Search"}>
                <div className={"search-btn-dropit"}>Search</div>
            </NavLink>
        </>
    );
}

export default SearchBar;