import React from 'react';
import "./Songs.css"
import Song from "../../Song/Song";

function Songs({list}) {
    return (
        <div className={"Songs"}>
            {list.map((song) => {return <Song info={song}/>})}
        </div>
    );
}

export default Songs;