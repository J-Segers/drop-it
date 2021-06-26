import React from 'react';
import "./Tab.css";

function Tab({title}) {
    return (
        <input className={"Tab"} type={"button"} value={title} />
    );
}

export default Tab;