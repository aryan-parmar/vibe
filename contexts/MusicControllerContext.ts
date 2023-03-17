import { createContext, Dispatch, useState } from "react";

interface MusicControllerState {
    playing: any;
    queue: any;
    currentSongName: any;
    currentSongArtist: any;
    currentSongAlbum: any;
    currentSongArt: any;
    currentSongDuration: any;
    currentSongIndex: any;
    initiallized: any;
    volume: any;
    songPlayer: HTMLAudioElement | null;

    setPlaying: Dispatch<any> | null;
    setQueue: Dispatch<any> | null;
    setCurrentSongName: Dispatch<any> | null;
    setCurrentSongArtist: Dispatch<any> | null;
    setCurrentSongAlbum: Dispatch<any> | null;
    setCurrentSongArt: Dispatch<any> | null;
    setCurrentSongDuration: Dispatch<any> | null;
    setCurrentSongIndex: Dispatch<any> | null;
    setInitiallized: Dispatch<any> | null;
    setVolume: Dispatch<any> | null;
    setSongPlayer: Dispatch<any> | null;
}

export const MusicControllerContext = createContext<MusicControllerState>({
    playing: null,
    queue: null,
    currentSongName: null,
    currentSongArtist: null,
    currentSongAlbum: null,
    currentSongArt: null,
    currentSongDuration: null,
    currentSongIndex: null,
    volume: null,
    songPlayer: null,
    initiallized: false,
    setPlaying: null,
    setQueue: null,
    setCurrentSongName: null,
    setCurrentSongArtist: null,
    setCurrentSongAlbum: null,
    setCurrentSongArt: null,
    setCurrentSongDuration: null,
    setCurrentSongIndex: null,
    setInitiallized: null,
    setVolume: null,
    setSongPlayer: null,
});
