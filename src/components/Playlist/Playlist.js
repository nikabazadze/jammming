import './Playlist.css';
import React from "react";

import TrackList from '../TrackList/TrackList';

function Playlist(props) {
    return (
        <div className='playlist-container'>
            <h2>{props.playlistName}</h2>
            <hr />
            <TrackList tracks={props.playlistTracks} />
        </div>
    )
}

export default Playlist;