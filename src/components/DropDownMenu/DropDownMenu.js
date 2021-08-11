import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import "./DropDownMenu.css";
import {VisibilityContext} from "../../context/visibilityProvider";

function DropDownMenu() {

    const {toggleMenu, toggleLoginPopUp} = useContext(VisibilityContext);

    return (
    <div id={"DropDownMenu"}>
        <div className={"dropdown-item"}>
            <Link to={"/Profile/info"} onClick={() => {toggleMenu();}}>Profile page</Link>
        </div>
        <hr/>
        <div className={"dropdown-item"}>
            <Link onClick={() => {toggleLoginPopUp(); toggleMenu()}}>Register/login</Link>
        </div>
    </div>);
}

export default DropDownMenu;