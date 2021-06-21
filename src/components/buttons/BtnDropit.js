import React from 'react';
import "./BtnDropit.css";

function BtnDropit({name}) {
    return (
        <>
            <input type={"button"} className={"header-btn"} value={name} />
        </>
    );
}

export default BtnDropit;