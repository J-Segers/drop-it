import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import "./DropDownMenu.css";
import {PageContext} from "../../context/PageProvider";

function DropDownMenu({dropDownMenuVisible}) {
    const {setPage} = useContext(PageContext);
return (
    <div className={"DropDownMenu"}>
        <Link to={"/Profile/info"} onClick={() => {dropDownMenuVisible(false); setPage("/profile/info")}}>Profile page</Link>
    </div>
);
}

export default DropDownMenu;