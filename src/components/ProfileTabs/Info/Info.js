import React from 'react';
import "./Info.css";

function Info({artist}) {
    return (
        <div className={"Artist-info"}>
            <div className={"artist-personal-info"}>
                <div className={"info-sec1"}>
                    <div>test</div>
                    <div>test</div>
                </div>
                <div className={"info-sec2"}>
                    <div>test</div>
                    <div>test</div>
                </div>
                <div className={"info-sec3"}>
                    <div>test</div>
                    <div>test</div>
                </div>
                <div className={"info-sec4"}>
                    <div>test</div>
                    <div>test</div>
                </div>
            </div>
            <div className={"artist-story"}>
                {artist.Background ? artist.Background : "Artist Background"}
            </div><div className={"artist-style-info"}>
            {artist.style ? artist.style : "Artist styles"}
        </div>
        </div>
    );
}

export default Info;