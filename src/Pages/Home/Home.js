import React, {useContext, useEffect, useState} from 'react';
import "./Home.css";
import songImg from "../../assets/kirito-square.jpg"
import NewArtist from "../../components/NewArtists/NewArtist";
import WeeklyTopTen from "../../components/WeeklyTopTen/WeeklyTopTen";
import axios from "axios";
import {VisibilityContext} from "../../context/visibilityProvider";
import UserAuthentication from "../../PopUp/UserAuthentication";

function Home() {
    const [newArtists, setNewArtists] = useState(null);

    const {authyVisible} = useContext(VisibilityContext);

    async function getNewArtists() {
        try{
            const result = await axios.get("http://localhost:8080/api/v1/person");
            setNewArtists(result.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {

        getNewArtists();

    }, [])


    return (
        <>
            {authyVisible === true ? <UserAuthentication /> : ""}
            <div className={"Home"}>
                <section id={"one"}>
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
                        best efforts to produce, create and
                        re-invent music. We are proud of this
                        community and so every week
                        we present the new artists right here.
                    </div>
                    <div id={"artist-list"}>
                        {newArtists !== null ? newArtists.map((artist) => {
                            return <NewArtist artistInfo={artist} />;
                        }) : "no new artist"}
                    </div>
                </section>
                <section id={"three"}>
                    <div className={"section-title"}>
                        Weekly Top Ten
                    </div>
                    <div id={"week-list"}>
                        {newArtists != null ? newArtists.map((song) => {
                            return <WeeklyTopTen song={song} />;
                        }) : ""}
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;