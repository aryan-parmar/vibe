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
    const init = (
        queue: { src: string; name: string; artist: string; cover: string }[]
    ) => {
        if (!state.initiallized) {
            let player = new Audio();
            state.setSongPlayer && state.setSongPlayer(player);
            state.setInitiallized && state.setInitiallized(true);
            setQueue(queue);
            setSong(
                queue[0].src,
                queue[0].name,
                queue[0].artist,
                queue[0].cover
            );
            state.setCurrentSongIndex && state.setCurrentSongIndex(0);
        }
    };
    const getQueue = () => {
        return state.queue;
    };
    const setSong = (
        src: string,
        name: string,
        artist: string,
        cover: string
    ) => {
        if (!state.initiallized) {
            let player = new Audio(src);
            state.setSongPlayer && state.setSongPlayer(player);
            state.setInitiallized && state.setInitiallized(true);
        } else {
            state.songPlayer!.src = src;
        }
        state.setCurrentSongArt && state.setCurrentSongArt(cover);
        state.setPlaying && state.setPlaying(false);
        state.setCurrentSongName && state.setCurrentSongName(name);
        state.setCurrentSongArtist && state.setCurrentSongArtist(artist);
        state.setCurrentSongIndex && state.setCurrentSongIndex(0);
        navigator.mediaSession.metadata = new MediaMetadata({
            title: name,
            artist: artist,
            artwork: [{ src: cover }],
        });
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
    };

    const playSong = (
        src: string,
        name: string,
        artist: string,
        cover: string
    ) => {
        setQueue([{ src, name, artist, cover }]);
        if (state.queue && state.queue.length > 0) {
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
        }
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
    const playSongFromIndex = (index: number) => {
        if (state.queue && state.queue.length > 0) {
            let song = state.queue[index];
            let src = song.src;
            let name = song.name;
            let artist = song.artist;
            let cover = song.cover;
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
        }
    };
    const nextSong = () => {
        if (state.queue && state.queue.length > 0) {
            let nextSongIndex = state.currentSongIndex + 1;
            if (nextSongIndex >= state.queue.length) {
                state.songPlayer && state.songPlayer.pause();
                state.songPlayer &&
                    (state.songPlayer.currentTime = state.songPlayer.duration);
            } else {
                state.setCurrentSongIndex &&
                    state.setCurrentSongIndex(nextSongIndex);
                playSongFromIndex(nextSongIndex);
            }
        }
    };
    const previousSong = () => {
        if (state.queue && state.queue.length > 0) {
            let previousSongIndex = state.currentSongIndex - 1;
            if (previousSongIndex < 0) {
                state.songPlayer && state.songPlayer.pause();
                state.songPlayer && (state.songPlayer.currentTime = 0);
            } else {
                state.setCurrentSongIndex &&
                    state.setCurrentSongIndex(previousSongIndex);
                playSongFromIndex(previousSongIndex);
            }
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
    const setQueue = (
        queue: {
            src: string;
            name: string;
            artist: string;
            cover: string;
        }[]
    ) => {
        state.setQueue && state.setQueue([...queue]);
    };

    return {
        init,
        playSong,
        togglePlay,
        nextSong,
        previousSong,
        seek,
        toggleMute,
        setQueue,
        getQueue,
        setSong,
    };
};
