import React from 'react';
import {Link} from "react-router-dom";
import "./DropDownMenu.css";

function DropDownMenu({dropDownMenuVisible}) {
return (
    <div id={"DropDownMenu"}>
        <div className={"dropdown-item"}>
            <Link to={"/Profile/info"} onClick={() => {dropDownMenuVisible(false);}}>Profile page</Link>
        </div>
        <hr/>
        <div className={"dropdown-item"}>
            Register/login
        </div>

    </div>);
}

export default DropDownMenu;