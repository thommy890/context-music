import React from 'react';
import Banner from './Banner';
import { MusicPlayerProvider } from './MusicPlayerContext';
import TrackList from './TrackList';
import PlayerControls from './PlayerControls';
import NowPlaying from './NowPlaying';
import AudioPlayer from './AudioPlayer'; 

function App() {
  return (
    <MusicPlayerProvider>
      <Banner />
      <div className="app-container flex flex-col items-center justify-center min-h-screen">
        <NowPlaying />
        <TrackList />
        <PlayerControls />
        <AudioPlayer />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
