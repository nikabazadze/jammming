import './Track.css';
import React from "react";

function Track(props) {
    return (
        <div className='track'>
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
        </div>
    )
}

export default Track;