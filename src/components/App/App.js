import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistName, setPlaylistName ] = useState('New Playlist');
  const [ playlistTracks, setPlaylistTracks ] = useState([]);
  const [ savedPlayists, setSavedPlayists ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    setSearchResults([
      {
        id: 1,
        uri: 1,
        name: 'God\'s Plan',
        artist: 'Drake',
        album: 'Scorpion'
      },
      {
        id: 2,
        uri: 2,
        name: 'Young, Wild and Free',
        artist: 'Snoop Dogg',
        album: 'Something'
      },
      {
        id: 3,
        uri: 3,
        name: 'Hypnotize',
        artist: 'The Notorious B.I.G',
        album: 'Unknown'
      }
    ]);
  }, []);

  function addTrack(track) {
    if (!playlistTracks.find((playlistTrack) => playlistTrack.id === track.id)) {
      setPlaylistTracks((prev) => {
        return [...prev, track];
      });
    }
  };

  function removeTrack(track) {
    setPlaylistTracks(
      playlistTracks.filter((playlistTrack) => {
        return playlistTrack.id !== track.id;
      })
    );
  };

  function savePlaylist() {
    const trackURIs = playlistTracks.map((track) => track.uri);
    setSavedPlayists((prev) => {
      return [
        ...prev,
        {
          name: playlistName,
          uris: trackURIs
        }
      ];
    });
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
  };

  return (
    <div>
      <header>
        <h1>Jammming</h1>
      </header>

      <main className='app'>
        <SearchBar 
          searchTerm={searchTerm}
          onChange={setSearchTerm}
        />
        <section className='main-container'>
          <SearchResults 
            searchResults={searchResults}
            onAdd={addTrack}
          />
          <Playlist 
            playlistTracks={playlistTracks}
            playlistName={playlistName}
            onNameChange={setPlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
