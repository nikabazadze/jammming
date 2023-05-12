import './Track.css';
import React from "react";

function Track(props) {
    function handleClick({target}) {
        props.onAdd(props.track)
    }
    
    return (
        <div className='track'>
            <div>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button onClick={handleClick}>{props.onAdd ? '+' : '-'}</button>
        </div>
    )
}

export default Track;