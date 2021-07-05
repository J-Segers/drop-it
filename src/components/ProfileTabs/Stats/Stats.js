import React from 'react';
import "./Stats.css";

function Stats(props) {
    return (
        <div className={"account-statistics"}>
            <div id={"stats-followers"}>Followers</div>
            <div id={"stats-likes"}>Likes</div>
            <div id={"stats-upload"}>upload frequency</div>
            <div id={"stats-mls"}>most listened songs</div>
            <div id={"stats-popular"}>most popular songs</div>
        </div>
    );
}

export default Stats;