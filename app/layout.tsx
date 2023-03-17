"use client";
import MediaControl from "@/components/MediaControl";
import Sidenav from "@/components/Sidenav";
import { useContext, useState } from "react";
import "./globals.css";
import { MusicControllerContext } from "@/contexts/MusicControllerContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const state = useContext(MusicControllerContext);
    const [playing, setPlaying] = useState(false);
    const [queue, setQueue] = useState<object[]>([]);
    const [currentSongName, setCurrentSongName] = useState("");
    const [currentSongArtist, setCurrentSongArtist] = useState("");
    const [currentSongAlbum, setCurrentSongAlbum] = useState("");
    const [currentSongArt, setCurrentSongArt] = useState("");
    const [currentSongDuration, setCurrentSongDuration] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [songPlayer, setSongPlayer] = useState<HTMLAudioElement | null>(null);
    const [initiallized, setInitiallized] = useState(false);
    const [volume, setVolume] = useState(0.5);
    state.playing = playing;
    state.queue = queue;
    state.currentSongName = currentSongName;
    state.currentSongArtist = currentSongArtist;
    state.currentSongAlbum = currentSongAlbum;
    state.currentSongArt = currentSongArt;
    state.currentSongDuration = currentSongDuration;
    state.currentSongIndex = currentSongIndex;
    state.songPlayer = songPlayer;
    state.volume = volume;
    state.initiallized = initiallized;
    state.setPlaying = setPlaying;
    state.setQueue = setQueue;
    state.setCurrentSongName = setCurrentSongName;
    state.setCurrentSongArtist = setCurrentSongArtist;
    state.setCurrentSongAlbum = setCurrentSongAlbum;
    state.setCurrentSongArt = setCurrentSongArt;
    state.setCurrentSongDuration = setCurrentSongDuration;
    state.setCurrentSongIndex = setCurrentSongIndex;
    state.setSongPlayer = setSongPlayer;
    state.setVolume = setVolume;
    state.setInitiallized = setInitiallized;
  return (
    <html lang="en">
      <body>
        <Sidenav />
        {children}
        <MediaControl />
      </body>
    </html>
  );
}
