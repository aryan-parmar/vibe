import React, { useContext } from "react";
import { useMusicController } from "@/hooks/useMusicController";
import { MusicControllerContext } from "@/contexts/MusicControllerContext";

export default function MediaControl() {
    let MusicController = useMusicController();
    let state = useContext(MusicControllerContext);
    return (
        <div className="bg-[#222533] w-[99vw] h-[4.5rem] absolute bottom-[10px] z-30 flex justify-center items-center rounded-lg shadow-[0px_-25px_53px_0px_rgba(0,0,0,0.75)]">
            <div className="flex justify-between w-full h-full px-4 items-center">
                <div className="h-[80%] flex justify-center items-center gap-4">
                    {state.initiallized && (
                        <img
                            src={state.currentSongArt}
                            alt="cover"
                            className="h-full w-auto rounded-lg"
                        />
                    )}
                    <div className="flex flex-col justify-center h-full items-start">
                        <h1 className="text-lg p-0 capitalize font-bold">
                            {state.currentSongName}
                        </h1>
                        <h3 className="p-0 text-slate-400 text-sm">
                            {state.currentSongArtist}
                        </h3>
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-center items-center gap-4">
                        <button className="w-8 h-8 p-[0.7rem] bg-transparent rounded-full flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                className="w-full fill-white"
                            >
                                <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z" />
                            </svg>
                        </button>
                        <button className="w-9 h-9 p-[0.7rem] bg-[#9da5d061] rounded-full flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                className="w-full fill-white"
                            >
                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                            </svg>
                        </button>
                        <button className="w-8 h-8 p-[0.7rem] bg-transparent rounded-full flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                className="w-full fill-white"
                            >
                                <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <input type="range" name="" id="" />
                    </div>
                </div>

                <div className="h-[80%] flex justify-center items-center gap-4">
                    {state.initiallized && (
                        <img
                            src={state.currentSongArt}
                            alt="cover"
                            className="h-full w-auto rounded-lg"
                        />
                    )}
                    <div className="flex flex-col justify-between h-full items-start">
                        <h1 className="text-xl p-0 capitalize">
                            {state.currentSongName}
                        </h1>
                        <h3 className="p-0 text-slate-400">
                            {state.currentSongArtist}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
