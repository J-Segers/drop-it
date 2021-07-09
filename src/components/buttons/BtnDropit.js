import React from 'react';
import "./BtnDropit.css";

function BtnDropit({name}) {
    return (
        <>
            <div className={"header-btn"}>{name}</div>
        </>
    );
}

export default BtnDropit;