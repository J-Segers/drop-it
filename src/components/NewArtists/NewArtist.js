import React from 'react';
import "../../assets/kirito.jpg";
import "./NewArtist.css";

function NewArtist({artistInfo}) {
    return (
        <div className={"NewArtist"}>
            <div id={"profile-picture"}>
                <img src={artistInfo.profilePicture} alt={"user"}/>
            </div>
            <div id={"artistInfo"}>
                <label>name:</label> {artistInfo.artistName}
                <label>age:</label> {artistInfo.age}
                <label>genre:</label> {artistInfo.genre}
            </div>
        </div>
    );
}

export default NewArtist;