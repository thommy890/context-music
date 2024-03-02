import React from 'react';
import { useMusicPlayer } from './MusicPlayerContext';

const TrackList = () => {
  const { tracks, playTrack, currentTrack } = useMusicPlayer();

  return (
    <div className="flex justify-center items-center">
      <div className="track-list bg-base-100 p-4 rounded-box shadow-lg max-w-md w-full">
        <ul className="menu p-2">
          {tracks.map((track, index) => (
            <li key={track.id} className="flex justify-center">
              <button
                className={`btn w-full justify-center ${currentTrack && track.id === currentTrack.id ? 'btn-active' : ''}`} // Apply a different style if this is the current track
                onClick={() => playTrack(index)}
              >
                {track.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrackList;
