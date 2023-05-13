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

                <div className="w-[50%] h-fit flex justify-center items-center flex-ce py-3 gap-4 absolute left-1/2 -translate-x-1/2">
                    <div className="flex justify-center items-center gap-3">
                        <button className="w-8 h-8 p-[0.7rem] rounded-full flex justify-center items-center bg-[#9da5d029]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                className="w-full fill-white"
                            >
                                <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z" />
                            </svg>
                        </button>
                        <button
                            className="w-9 h-9 p-[0.7rem] bg-[#9da5d061] rounded-full flex justify-center items-center"
                            onClick={() => MusicController.togglePlay()}
                        >
                            {state.playing ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-full fill-white"
                                >
                                    <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    className="w-full fill-white"
                                >
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                </svg>
                            )}
                        </button>
                        <button className="w-8 h-8 p-[0.7rem] bg-[#9da5d029] rounded-full flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                className="w-full fill-white"
                            >
                                <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full flex justify-center items-center flex-col gap-2">
                        <div className="flex w-full justify-between">
                            <span className="text-xs text-slate-400">
                                {Math.floor(state.currentTime / 60).toString()
                                    .length == 1
                                    ? `0${Math.floor(state.currentTime / 60)}`
                                    : Math.floor(state.currentTime / 60)}
                                :
                                {Math.ceil(state.currentTime % 60).toString()
                                    .length == 1
                                    ? `0${Math.ceil(state.currentTime % 60)}`
                                    : Math.ceil(state.currentTime % 60)}
                            </span>
                            <span className="text-xs text-slate-400 float-right">
                                {Math.floor(
                                    state.currentSongDuration / 60
                                ).toString().length == 1
                                    ? `0${Math.floor(
                                          state.currentSongDuration / 60
                                      )}`
                                    : Math.floor(
                                          state.currentSongDuration / 60
                                      )}
                                :
                                {Math.ceil(
                                    state.currentSongDuration % 60
                                ).toString().length == 1
                                    ? `0${Math.ceil(
                                          state.currentSongDuration % 60
                                      )}`
                                    : Math.ceil(state.currentSongDuration % 60)}
                            </span>
                        </div>
                        <input
                            type="range"
                            name=""
                            id=""
                            className="w-full input-slide"
                            max={state.currentSongDuration}
                            value={state.currentTime}
                            onChange={(e) =>
                                MusicController.seek(parseInt(e.target.value))
                            }
                        />
                    </div>
                </div>

                <div className="h-[80%] flex justify-center items-center gap-4">
                    <button
                        className="w-8 h-8 p-[0.6rem] bg-[#9da5d029] rounded-full flex justify-center items-center"
                        onClick={MusicController.toggleMute}
                    >
                        {state.volume != 0 ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-full fill-white"
                            >
                                <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-full fill-white"
                            >
                                <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
                            </svg>
                        )}
                    </button>
                    <button className="w-8 h-8 p-[0.7rem] bg-[#9da5d029] rounded-full flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-full fill-white"
                        >
                            <path d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
