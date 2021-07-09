import React, {useContext} from 'react';
import BtnDropit from "../buttons/BtnDropit";
import "./SearchBar.css";
import {NavLink} from "react-router-dom";
import {PageContext} from "../../context/PageProvider";

function SearchBar() {
    const {setPage} = useContext(PageContext);
    return (
        <>
            <input type={"search"} id={"searchbar"} /><NavLink className={"dropit-btn"} to={"/Search"} onClick={() => setPage("/Search")}><BtnDropit name={"SEARCH"}/></NavLink>
        </>
    );
}

export default SearchBar;