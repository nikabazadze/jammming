import './SearchBar.css';
import React from "react";

function SearchBar(props) {
    function handleChange({target}) {
        props.onChange(target.value);
    }
    
    return (
        <div className='searchBar'>
            <input 
                type='text'
                placeholder='Enter A Song, Album or Artist'
                value={props.searchTerm}
                onChange={handleChange}
            />
            <button className='CTA'>SEARCH</button>
        </div>
    )
}

export default SearchBar;