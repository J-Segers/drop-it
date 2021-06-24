import React from 'react';
import "./WeeklyTopTen.css";

function WeeklyTopTen({song}) {
    return (
        <div className={"song"}>
            <div id={"profile-picture"}>
                <img src={song.profilePicture} alt={"user"}/>
            </div>
            <div id={"song-info"}>
                <label>name:</label> {song.artistName}
                <label>age:</label> {song.age}
                <label>genre:</label> {song.genre}
            </div>
        </div>
    );
}

export default WeeklyTopTen;