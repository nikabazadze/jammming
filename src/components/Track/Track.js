import './Track.css';
import React from "react";

function Track(props) {

    // It adds or removes track from the playlist depending on props.isRemoval value
    function handleClick() {
        props.isRemoval ? props.onRemove(props.track) : props.onAdd(props.track);
    }
    
    return (
        <div className='track'>
            <div>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button onClick={handleClick}>{props.isRemoval ? '-' : '+'}</button>
        </div>
    )
}

export default Track;