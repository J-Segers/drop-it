import React from 'react';
import "./Profile.css";
import setting from "../../assets/cogwheel.png";
import userPic from "../../assets/kirito.jpg";
import Song from "../../components/Song/Song";
import Tab from "../../components/ProfileTabs/Tab";

function Profile({user}) {
    const list = [
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : "../../assets/kirito.jpg" }
    ];

    return (
        <div className={"Profile"}>
            <header>
                <div className={"user-picture"}>
                    <img className={"user-picture"} src={userPic} alt={"kirito"}/>
                </div>
                <div className={"settings"}>
                    <img className={"settings"} src={setting} alt={"Settings"}/>
                </div>
            </header>
            <nav>
                <div className={"tabs"} >
                    <Tab title={"Info"} />
                    <Tab title={"Songs"} />
                    <Tab title={"Events"} />
                    <Tab title={"Stats"} />
                    <Tab title={"Upload"} />
                </div>
            </nav>
            <main>
                {list.map((song) => {return <Song info={song}/>})}
            </main>
        </div>
    );
}

export default Profile;