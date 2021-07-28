import React from 'react';
import "./Song.css";
import "../../assets/kirito.jpg";

function Song({info}) {
    return (
        <div className={"Song"}>
            <div>
                <img src={info.songImg} alt={info.songName}/>
            </div>
            <div className={"song-info"}>
                <label>{info.songName}</label>
                <label>{info.songLength}</label>
                <label>{info.genre}</label>
            </div>
        </div>
    );
}

export default Song;