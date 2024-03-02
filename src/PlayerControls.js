import React from 'react';
import { useMusicPlayer } from './MusicPlayerContext';

const PlayerControls = () => {
    const { togglePlayPause, playNextTrack, playPreviousTrack, isPlaying, currentTrack, currentTime, duration } = useMusicPlayer();

    const formatTime = (time) => {
        if (Number.isNaN(time) || time === undefined) {
            return "00:00";
        }
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="player-controls flex flex-col items-center gap-2 my-4">
            <div className="flex justify-center gap-4">
                <button onClick={playPreviousTrack} disabled={!currentTrack} className="btn btn-ghost btn-circle">
                    ❮
                </button>
                <button onClick={togglePlayPause} disabled={!currentTrack} className={`btn ${isPlaying ? 'btn-error' : 'btn-success'} btn-wide`}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button onClick={playNextTrack} disabled={!currentTrack} className="btn btn-ghost btn-circle">
                    ❯
                </button>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${Math.max(0, Math.min((currentTime / duration) * 100, 100))}%` }}></div>
            </div>
            <div className="text-xs w-full flex justify-between">
                <span>{formatTime(currentTime)}</span>
                <span>-{formatTime(Math.max(0, duration - currentTime))}</span>
            </div>
        </div>
    );
};

export default PlayerControls;
