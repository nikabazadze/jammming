import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Spotify from '../../Util/Spotify';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistName, setPlaylistName ] = useState('New Playlist');
  const [ playlistTracks, setPlaylistTracks ] = useState([]);
  const [ savedPlayists, setSavedPlayists ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

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

  function search() {
    Spotify.search(searchTerm).then((results) => {
      setSearchResults(results);
    })
  }

  return (
    <div>
      <header>
        <h1>Jammming</h1>
      </header>

      <main className='app'>
        <SearchBar 
          searchTerm={searchTerm}
          onChange={setSearchTerm}
          onSearch={search}
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
