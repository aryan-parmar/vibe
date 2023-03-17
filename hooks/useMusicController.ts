import { useContext } from "react";
import { MusicControllerContext } from "../contexts/MusicControllerContext";

export const useMusicController = () => {
    const state = useContext(MusicControllerContext);
    const playSong = (
        src: string,
        name: string,
        artist: string,
        cover: string
    ) => {
        if (!state.initiallized) {
            console.log(state.initiallized, src);
            let player = new Audio(src);
            state.setSongPlayer && state.setSongPlayer(player);
            state.setCurrentSongArt && state.setCurrentSongArt(cover);
            state.setPlaying && state.setPlaying(true);
            state.setCurrentSongName && state.setCurrentSongName(name);
            state.setCurrentSongArtist && state.setCurrentSongArtist(artist);
            player.play();
            state.setInitiallized && state.setInitiallized(true);
        }
        else{
            state.songPlayer!.src = src;
            state.setCurrentSongArt && state.setCurrentSongArt(cover);
            state.setPlaying && state.setPlaying(true);
            state.setCurrentSongName && state.setCurrentSongName(name);
            state.setCurrentSongArtist && state.setCurrentSongArtist(artist);
            state.songPlayer && state.songPlayer.play();
        }
    };
    return {
        playSong,
    };
};
