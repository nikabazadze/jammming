import './SearchResults.css';
import React from "react";

import TrackList from '../TrackList/TrackList';

function SearchResults(props) {
    return (
        <div className='searchResults'>
            <h2>Results</h2>
            <hr />
            <TrackList 
                tracks={props.searchResults}
                onAdd={props.onAdd}
            />
        </div>
    )
}

export default SearchResults;