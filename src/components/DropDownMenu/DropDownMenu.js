import React from 'react';
import {NavLink} from "react-router-dom";
import "./DropDownMenu.css";

function DropDownMenu({dropDownMenuVisible}) {
    return (
        <div className={"DropDownMenu"}>
            <NavLink to={"/Profile"} onClick={() => dropDownMenuVisible(false)}>Profile page</NavLink>
        </div>
    );
}

export default DropDownMenu;