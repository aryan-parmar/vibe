import { useContext, useEffect } from "react";
import { MusicControllerContext } from "../contexts/MusicControllerContext";

export const useMusicController = () => {
    const state = useContext(MusicControllerContext);
    useEffect(() => {
        if (state.songPlayer) {
            state.songPlayer.addEventListener("ended", () => {
                state.setPlaying && state.setPlaying(false);
            });
            state.songPlayer.addEventListener("loadeddata", () => {
                state.setCurrentSongDuration &&
                    state.setCurrentSongDuration(state.songPlayer!.duration);
            });
            state.songPlayer.addEventListener("pause", () => {
                state.setPlaying && state.setPlaying(false);
            });
            state.songPlayer.addEventListener("play", () => {
                state.setPlaying && state.setPlaying(true);
            });
            state.songPlayer.addEventListener("timeupdate", () => {
                state.setCurrentTime &&
                    state.setCurrentTime(state.songPlayer!.currentTime);
            });
            state.songPlayer.addEventListener("volumechange", () => {
                state.setVolume && state.setVolume(state.songPlayer!.volume);
            });
        }
    }, [state.songPlayer]);
    const playSong = (
        src: string,
        name: string,
        artist: string,
        cover: string
    ) => {
        if (!state.initiallized) {
            let player = new Audio(src);
            state.setSongPlayer && state.setSongPlayer(player);
            state.setInitiallized && state.setInitiallized(true);
            player.play();
        } else {
            state.songPlayer!.src = src;
            state.songPlayer && state.songPlayer.play();
        }
        state.setCurrentSongArt && state.setCurrentSongArt(cover);
        state.setPlaying && state.setPlaying(true);
        state.setCurrentSongName && state.setCurrentSongName(name);
        state.setCurrentSongArtist && state.setCurrentSongArtist(artist);
        state.setCurrentSongIndex && state.setCurrentSongIndex(0);
        state.setQueue && state.setQueue([{ src, name, artist, cover }]);
        navigator.mediaSession.metadata = new MediaMetadata({
            title: name,
            artist: artist,
            artwork: [{ src: cover }],
        });
        navigator.mediaSession.setActionHandler("play", () => {
            togglePlay();
        });
        navigator.mediaSession.setActionHandler("pause", () => {
            togglePlay();
        });
        navigator.mediaSession.setActionHandler("nexttrack", () => {
            nextSong();
        });
        navigator.mediaSession.setActionHandler("previoustrack", () => {
            nextSong();
        });
        navigator.mediaSession.setActionHandler("seekto", (details) => {
            seek(details.seekTime!);
        });
        navigator.mediaSession.setActionHandler("stop", () => {
            state.songPlayer && state.songPlayer.pause();
        });
        navigator.mediaDevices.addEventListener("pause", () => {
            togglePlay();
        });
        navigator.mediaDevices.addEventListener("play", () => {
            togglePlay();
        });
        navigator.mediaDevices.addEventListener("nexttrack", () => {
            nextSong();
        });
        navigator.mediaDevices.addEventListener("previoustrack", () => {
            nextSong();
        });
        // navigator.mediaDevices.enumerateDevices().then((devices) => {
        //     devices.forEach((device) => {
        //         if (device.kind === "audiooutput") {
        //             console.log(device);
        //         }
        //     });
        // });
    };
    const togglePlay = () => {
        if (state.songPlayer && state.initiallized) {
            if (state.playing) {
                state.songPlayer && state.songPlayer.pause();
            } else {
                state.songPlayer && state.songPlayer.play();
            }
        }
    };
    const nextSong = () => {
        if (state.queue && state.queue.length > 0) {
            let nextSongIndex = state.currentSongIndex + 1;
            if (nextSongIndex >= state.queue.length) {
                nextSongIndex = 0;
            }
            state.setCurrentSongIndex &&
                state.setCurrentSongIndex(nextSongIndex);
            playSong(
                state.queue[nextSongIndex].src,
                state.queue[nextSongIndex].name,
                state.queue[nextSongIndex].artist,
                state.queue[nextSongIndex].cover
            );
        }
    };
    const seek = (time: number) => {
        if (state.songPlayer && state.initiallized) {
            state.songPlayer.currentTime = time;
        }
    };
    const toggleMute = () => {
        if (state.songPlayer && state.initiallized) {
            if (state.volume > 0) {
                state.songPlayer.volume = 0;
                state.setVolume && state.setVolume(0);
            } else {
                state.songPlayer.volume = 1;
                state.setVolume && state.setVolume(1);
            }
        }
    };
    return {
        playSong,
        togglePlay,
        nextSong,
        seek,
        toggleMute,
    };
};
