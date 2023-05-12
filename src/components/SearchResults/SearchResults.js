import './SearchResults.css';
import React from "react";

import TrackList from '../TrackList/TrackList';

function SearchResults(props) {
    return (
        <div className='searchResults'>
            <h2>Results</h2>
            <TrackList tracks={props.searchResults} />
        </div>
    )
}

export default SearchResults;