import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import "./DropDownMenu.css";
import {PageContext} from "../../context/PageProvider";

function DropDownMenu({dropDownMenuVisible}) {
    const {setPage} = useContext(PageContext);
return (
    <div className={"DropDownMenu"}>
        <NavLink to={"/Profile/info"} onClick={() => {dropDownMenuVisible(false); setPage("/profile/info")}}>Profile page</NavLink>
    </div>
);
}

export default DropDownMenu;