import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistName, setPlaylistName ] = useState('My Playlist');
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
    ]);
  }, []);

  function addTrack(track) {
    if (!playlistTracks.includes(track)) {
      setPlaylistTracks((prev) => {
        return [...prev, track];
      });
    }
  };

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
            onAdd={addTrack}
          />
          <Playlist 
            playlistTracks={playlistTracks}
            playlistName={playlistName}
            onNameChange={setPlaylistName}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
