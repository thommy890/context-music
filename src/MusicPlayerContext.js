import React, { createContext, useContext, useState } from 'react';
import DaVinci from './music/DaVinci.m4a';
import OneOfTheseThingsFirst from './music/One of These Things First.m4a';
import RobsInterlude from "./music/Rob's Interlude.m4a";
import UsedToBeAChaCha from './music/Used to Be a Cha-Cha.m4a';
import ValdezOffCrenshaw from './music/Valdez Off Crenshaw.m4a';

const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
    const tracks = [
        { id: 1, name: 'DaVinci', src: DaVinci },
        { id: 2, name: 'One of These Things First', src: OneOfTheseThingsFirst },
        { id: 3, name: "Rob's Interlude", src: RobsInterlude },
        { id: 4, name: 'Used to Be a Cha-Cha', src: UsedToBeAChaCha },
        { id: 5, name: 'Valdez Off Crenshaw', src: ValdezOffCrenshaw },
    ];
    const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const playTrack = (index) => {
        setCurrentTrackIndex(index);
        setIsPlaying(true);
        setCurrentTime(0);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const playNextTrack = () => {
        setCurrentTrackIndex(prev => (prev === tracks.length - 1 ? 0 : prev + 1));
        setIsPlaying(true);
    };

    const playPreviousTrack = () => {
        setCurrentTrackIndex(prev => (prev === 0 ? tracks.length - 1 : prev - 1));
        setIsPlaying(true);
    };

    // This function could be triggered by the <audio> element's timeupdate event
    const updateCurrentTime = (time) => {
        setCurrentTime(time);
    };

    const setTrackDuration = (duration) => {
        setDuration(duration);
    };

    return (
        <MusicPlayerContext.Provider value={{
            tracks,
            currentTrackIndex,
            isPlaying,
            playTrack,
            togglePlayPause,
            playNextTrack,
            playPreviousTrack,
            currentTrack: tracks[currentTrackIndex] || null,
            currentTime,
            duration,
            updateCurrentTime,
            setTrackDuration,
        }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};

export const useMusicPlayer = () => useContext(MusicPlayerContext);