import React from 'react';
import "./Upload.css";

function Upload() {
    return (

        <form id={"upload"}>
            <div id={"upload-container"}>
                <div id={"song-upload-info"}>
                    <fieldset>
                        <legend>Song info</legend>
                        <div className={"song-upload-info-content"}>
                            <label htmlFor="song-title">title:</label>
                            <input type={"text"} name={"song-title"}/>
                        </div>
                        <div className={"song-upload-info-content"}>
                            <label htmlFor="song-genre">genre:</label>
                            <input type={"text"} name={"song-genre"}/>
                        </div>
                        <div className={"song-upload-info-content"}>
                            <label htmlFor="song-artist">artist:</label>
                            <input type={"text"} name={"song-artist"}/>
                        </div>
                        <div className={"song-upload-info-content"}>
                            <label htmlFor="song-collaboration">colaborating artists:</label>
                            <input type={"text"} name={"song-collaboration"}/>
                        </div>
                    </fieldset>
                </div>
                <div id={"song-upload-about"}>
                    <fieldset>
                        <legend>About the song</legend>
                        <textarea name="song-about" id="song-upload-story" cols={46} rows={11} />
                    </fieldset>
                </div>
                <div id={"song-upload-file"}>
                    <fieldset>
                        <legend>file to upload</legend>
                        <input type={"file"} name={"song"} accept={"audio/*"}/>
                    </fieldset>
                </div>
                <div id={"submit"}>
                    <input id={"submit-btn"} type={"submit"} />
                </div>
            </div>
        </form>
    );
}

export default Upload;