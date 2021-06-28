import React from 'react';
import "./Tab.css";

function Tab({title, changeTab}) {
    return (
        <input className={"Tab"} type={"button"} value={title} onClick={() => changeTab(title)} />
    );
}

export default Tab;