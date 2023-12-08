import './App.css';
import React from 'react';
import { useState } from 'react';
import Spotify from '../../Util/Spotify';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistName, setPlaylistName ] = useState('New Playlist');
  const [ playlistTracks, setPlaylistTracks ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  // Adds track to the playlist if it's not already added
  function addTrack(track) {
    if (!playlistTracks.find((playlistTrack) => playlistTrack.id === track.id)) {
      setPlaylistTracks((prev) => {
        return [...prev, track];
      });
    }
  };

  // Removes track from the playlist
  function removeTrack(track) {
    setPlaylistTracks(
      playlistTracks.filter((playlistTrack) => {
        return playlistTrack.id !== track.id;
      })
    );
  };

  // Saves playlist to the user's Spotify account
  function savePlaylist() {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  };

  // Searches for the songs of the specified artist/album in the Spotify library
  function search() {
    Spotify.search(searchTerm).then((results) => {
      setSearchResults(results);
    })
  };

  return (
    <div>
      <header>
        <a href='/'><h1>Jammming</h1></a>
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
