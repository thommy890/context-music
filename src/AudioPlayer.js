import React, { useEffect, useRef } from 'react';
import { useMusicPlayer } from './MusicPlayerContext';

const AudioPlayer = () => {
    const { currentTrack, isPlaying, updateCurrentTime, setTrackDuration } = useMusicPlayer();
    const audioRef = useRef(null);
    const lastTrackSrc = useRef('');
    const lastPlayingState = useRef(isPlaying);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onLoadedData = () => {
            setTrackDuration(audio.duration);
            // Guard against playing if isPlaying hasn't changed to true or if the track is the same and already playing
            if (isPlaying && lastPlayingState.current !== isPlaying) {
                audio.play().catch((error) => console.error("Error playing the track:", error));
            }
        };

        const onTimeUpdate = () => updateCurrentTime(audio.currentTime);

        audio.addEventListener('loadeddata', onLoadedData);
        audio.addEventListener('timeupdate', onTimeUpdate);

        if (currentTrack?.src !== lastTrackSrc.current) {
            audio.src = currentTrack?.src || '';
            lastTrackSrc.current = currentTrack?.src;
            audio.load();
        }

        // Control playback based on isPlaying, guarding against unnecessary state toggles
        if (isPlaying !== lastPlayingState.current) {
            if (isPlaying) {
                audio.play().catch((error) => console.error("Error playing the track:", error));
            } else {
                audio.pause();
            }
            lastPlayingState.current = isPlaying;
        }

        // Cleanup
        return () => {
            audio.removeEventListener('loadeddata', onLoadedData);
            audio.removeEventListener('timeupdate', onTimeUpdate);
        };
    }, [currentTrack, isPlaying, updateCurrentTime, setTrackDuration]);

    return <audio ref={audioRef} hidden />;
};

export default AudioPlayer;
