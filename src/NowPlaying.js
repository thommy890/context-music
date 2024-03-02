import React from 'react';
import { useMusicPlayer } from './MusicPlayerContext';

const NowPlaying = () => {
  const { currentTrack } = useMusicPlayer();

  // Display only if there is a current track
  if (!currentTrack) return null;

  return (
    <div className="now-playing bg-base-200 p-4 rounded-box shadow text-center my-4">
      <h2 className="text-lg font-bold">Now Playing</h2>
      <p className="text-md">{currentTrack.name}</p>
    </div>
  );
};

export default NowPlaying;
