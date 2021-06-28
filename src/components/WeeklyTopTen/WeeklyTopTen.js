import React from 'react';
import "./WeeklyTopTen.css";

function WeeklyTopTen({song}) {
    return (
        <div className={"song"}>
            <div id={"song-picture"}>
                <img src={song.songPicture} alt={"user"}/>
            </div>
            <div id={"song-info"}>
                <label>name:</label> {song.songName}
                <label>age:</label> {song.age}
                <label>genre:</label> {song.genre}
            </div>
        </div>
    );
}

export default WeeklyTopTen;