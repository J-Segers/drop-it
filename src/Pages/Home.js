import React from 'react';
import "./Home.css";

function Home() {
    return (
        <div className={"home"}>
            <main>
                <section id={"one"}>
                    <header>
                        <h1 id={"logo"}><a href={'#'}>Drop-It</a></h1>
                        <nav>
                            <input type={"button"} className={"menu-btn"} value={"test"} />
                            <input type={"button"} className={"menu-btn"} value={"test"} />
                            <input type={"button"} className={"menu-btn"} value={"test"} />
                        </nav>
                        <div id={"profile"}>

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
                <section>

                </section>
                <section>

                </section>
            </main>
        </div>
    );
}

export default Home;