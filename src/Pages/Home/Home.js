import React from 'react';
import "./Home.css";
import BtnDropit from "../../components/buttons/BtnDropit";
import "../../assets/kirito.jpg"
import NewArtist from "../../components/NewArtists/NewArtist";
import WeeklyTopTen from "../../components/WeeklyTopTen/WeeklyTopTen";

function Home() {
    const list = [
        {artistName : "Leroy Jenkins", age : 24, genre : "edm", profilePicture : "../../assets/kirito.jpg" },
        {artistName : "Leroy Jenkins", age : 24, genre : "edm", profilePicture : "../../assets/kirito.jpg" },
        {artistName : "Leroy Jenkins", age : 24, genre : "edm", profilePicture : "../../assets/kirito.jpg" },
        {artistName : "Leroy Jenkins", age : 24, genre : "edm", profilePicture : "../../assets/kirito.jpg" },
        {artistName : "Leroy Jenkins", age : 24, genre : "edm", profilePicture : "../../assets/kirito.jpg" },
        {artistName : "Leroy Jenkins", age : 24, genre : "edm", profilePicture : "../../assets/kirito.jpg" },
        {artistName : "Leroy Jenkins", age : 24, genre : "edm", profilePicture : "../../assets/kirito.jpg" },
        {artistName : "Leroy Jenkins", age : 24, genre : "edm", profilePicture : "../../assets/kirito.jpg" },
        {artistName : "Leroy Jenkins", age : 24, genre : "edm", profilePicture : "../../assets/kirito.jpg" },
        {artistName : "Leroy Jenkins", age : 24, genre : "edm", profilePicture : "../../assets/kirito.jpg" }
    ];
    return (
        <div className={"Home"}>
            <main>
                <section id={"one"}>
                    <header>
                        <h1 id={"logo"}>Drop-It</h1>
                        <nav>
                            <BtnDropit name={"search"} />
                            <BtnDropit name={"random"} />
                            <BtnDropit name={"contests"} />
                        </nav>
                        <div id={"profile"}>
                            <img src={"../../assets/kirito.jpg"} alt={"profile"}/>
                        </div>
                    </header>

                    <div id={"subscribe"}>
                        <div id={"sub-container"}>
                            <div id={"sub-text"}>
                                <h2 id={"sub-title"}>Subscribe now</h2>
                                <p>
                                    and get the latest updates on events
                                    contests and exciting new projects
                                </p>
                            </div>
                            <div id={"sub-input"}>
                                <input id={"sub-input-text"} type={"text"} placeholder={"e-mail address"} />
                                <input id={"sub-input-btn"} type={"button"} value={"subscribe"} />
                            </div>
                        </div>
                    </div>
                </section>
                <section id={"two"}>
                    <div id={"two-info"}>
                        Every week new skilled artist join our ranks
                        and every day they give you their
                        best efforts to produce and create and
                        re-invent music we are proud of this
                        community and so every week
                        we present the new artists right here
                    </div>
                    <div id={"artist-list"}>
                        {list.map((artist) => {
                            return <NewArtist artistInfo={artist} />;
                        })}
                    </div>
                </section>
                <section id={"three"}>
                    <div className={"section-title"}>
                        Weekly Top Ten
                    </div>
                    <div id={"week-list"}>
                        {list.map((artist) => {
                            return <WeeklyTopTen song={artist} />;
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;