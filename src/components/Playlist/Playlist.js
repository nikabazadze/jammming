import './Playlist.css';
import React from "react";

import TrackList from '../TrackList/TrackList';

function Playlist(props) {
    function handleChange({target}) {
        props.onNameChange(target.value);
    }

    return (
        <div className='playlist'>
            <input 
                value={props.playlistName}
                type='text'
                onChange={handleChange}
            />
            <hr />
            <TrackList 
                tracks={props.playlistTracks}
                onAdd={false}
            />
        </div>
    )
}

export default Playlist;