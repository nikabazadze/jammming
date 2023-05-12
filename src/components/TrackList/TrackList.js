import './TrackList.css';
import React from "react";

import Track from '../Track/Track';

function TrackList(props) {
    return (
       <div className='tracklist'>
            {
                props.tracks.map((track) => {
                    return <Track 
                                key={track.id}
                                track={track}
                            />
                })
            }
       </div>
    )
}

export default TrackList;