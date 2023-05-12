import './Playlist.css';
import React from "react";

import TrackList from '../TrackList/TrackList';

function Playlist(props) {
    function handleChange({target}) {
        props.onNameChange(target.value);
    }

    return (
        <div className='playlist trackresults-container'>
            <input 
                value={props.playlistName}
                type='text'
                onChange={handleChange}
            />
            <hr />
            <TrackList 
                tracks={props.playlistTracks}
                onRemove={props.onRemove}
                isRemoval={true}
            />
            <div className='button-container'>
                <button className='CTA' onClick={props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        </div>
    )
}

export default Playlist;