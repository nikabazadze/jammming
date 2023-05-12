import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistName, setPlaylistName ] = useState('');
  const [ playlistTracks, setPlaylistTracks ] = useState([]);

  useEffect(() => {
    setSearchResults([
      {
        id: 1,
        name: 'God\'s Plan',
        artist: 'Drake',
        album: 'Scorpion'
      },
      {
        id: 2,
        name: 'Young, Wild and Free',
        artist: 'Snoop Dogg',
        album: 'Something'
      },
      {
        id: 3,
        name: 'Hypnotize',
        artist: 'The Notorious B.I.G',
        album: 'Unknown'
      }
    ])
  }, []);

  return (
    <div>
      <header>
        <h1>Jammming</h1>
      </header>

      <main className='app'>
        <SearchBar setSearchResults={setSearchResults}/>
        <section className='main-container'>
          <SearchResults 
            searchResults={searchResults}
          />
          <Playlist />
        </section>
      </main>
    </div>
  );
}

export default App;
