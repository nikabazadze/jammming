import './SearchBar.css';
import React from "react";
import { useRef } from 'react';

function SearchBar(props) {
    const inputRef = useRef(null);

    // Updates the component App's searchTerm state
    function handleChange({target}) {
        props.onChange(target.value);
    }

    /**
     * When you press "Enter" while input is in focus, it searches 
     * for the songs using function received as prop from App component
     * @param {Event} e 
     */
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            inputRef.current.blur();
            props.onSearch();
        }
    }
    
    return (
        <div className='searchBar'>
            <input 
                type='text'
                placeholder='Enter A Song, Album or Artist'
                value={props.searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                ref={inputRef}
            />
            <button className='CTA' onClick={props.onSearch}>SEARCH</button>
        </div>
    )
}

export default SearchBar;