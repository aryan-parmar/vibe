import React, { useContext, useEffect } from "react";
import { useMusicController } from "@/hooks/useMusicController";
import { MusicControllerContext } from "@/contexts/MusicControllerContext";
import {
    faBackwardStep,
    faPause,
    faPlay,
    faForwardStep,
    faVolumeUp,
    faVolumeMute,
    faUpRightAndDownLeftFromCenter,
    faDownLeftAndUpRightToCenter,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./UiElements";

export default function MediaControl() {
    let MusicController = useMusicController();
    let state = useContext(MusicControllerContext);
    let [view, setView] = React.useState(false);

    useEffect(() => {
        if (state.initiallized) {
            let input = document.querySelector(
                ".input-slider"
            ) as HTMLInputElement;
            var r = document.querySelector(":root") as HTMLElement;
            r!.style.setProperty(
                "--percent",
                (
                    (parseFloat(input.value) / state.currentSongDuration) *
                    100
                ).toString() + "%"
            );
        }
    }, [state.currentSongDuration, state.currentTime]);
    return (
        <>
            <div
                className={`bg-[#101024] transition-opacity duration-1000 pointer-events-none flex w-[99vw] h-[4.5rem] absolute bottom-[10px] z-30 justify-center items-center rounded-lg shadow-[0px_-30px_53px_0px_rgba(0,0,0,0.95)] ${
                    view ? "h-[97vh] opacity-100" : "opacity-0"
                }`}
            >
                <img
                    src={state.currentSongArt}
                    alt="cover"
                    className={`w-[70vh] rounded-lg brightness-50 ${
                        view ? "h-[60vh]" : "h-full"
                    }`}
                />
            </div>
            <div
                className={`w-[99vw] h-[4.5rem] absolute bottom-[10px] z-30 flex justify-center items-center rounded-lg shadow-[0px_-30px_53px_0px_rgba(0,0,0,0.95)] transition-all duration-500 ease-out ${
                    view
                        ? "h-[97vh] backdrop-blur-3xl bg-[#24222e6c]"
                        : "bg-[#24222e]"
                }`}
            >
                <div
                    className={`flex w-full h-full px-4 items-center ${
                        view
                            ? "flex-col justify-end mb-8 gap-8"
                            : "justify-between"
                    }`}
                >
                    <div
                        className={` flex justify-center items-center gap-4 ${
                            view ? "flex-col h-auto" : "h-[80%]"
                        }`}
                    >
                        {state.initiallized && (
                            <img
                                src={state.currentSongArt}
                                alt="cover"
                                className={`rounded-lg ${
                                    view ? "h-[55vh] w-fit" : "h-full w-auto"
                                }`}
                            />
                        )}
                        <div
                            className={`flex flex-col justify-center h-full ${
                                view ? "item-center" : "items-start"
                            }`}
                        >
                            <h1
                                className={`p-0 capitalize font-bold ${
                                    view ? "text-center text-2xl" : "text-lg"
                                }`}
                            >
                                {state.currentSongName}
                            </h1>
                            <h3
                                className={`p-0 text-slate-400 ${
                                    view ? "text-center text-lg" : "text-sm"
                                }`}
                            >
                                {state.currentSongArtist}
                            </h3>
                        </div>
                    </div>

                    <div
                        className={`w-[50%] h-fit flex justify-center items-center py-3 ${
                            view
                                ? "flex-col relative"
                                : "absolute left-1/2 -translate-x-1/2 gap-4"
                        }`}
                    >
                        <div className="flex justify-center items-center gap-3">
                            <Button
                                icon={faBackwardStep}
                                onClick={MusicController.previousSong}
                                className="h-8 w-8"
                            />
                            <Button
                                icon={state.playing ? faPause : faPlay}
                                onClick={MusicController.togglePlay}
                                className="h-9 w-9 !bg-[rgba(157,165,208,0.4)]"
                            />
                            <Button
                                icon={faForwardStep}
                                onClick={MusicController.nextSong}
                                className="h-8 w-8"
                            />
                        </div>
                        <div className="w-full flex justify-center items-center flex-col gap-3">
                            <div className="flex w-full justify-between">
                                <span className="text-xs text-slate-400">
                                    {Math.floor(
                                        state.currentTime / 60
                                    ).toString().length == 1
                                        ? `0${Math.floor(
                                              state.currentTime / 60
                                          )}`
                                        : Math.floor(state.currentTime / 60)}
                                    :
                                    {Math.ceil(
                                        state.currentTime % 60
                                    ).toString().length == 1
                                        ? `0${Math.ceil(
                                              state.currentTime % 60
                                          )}`
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
                                        : Math.ceil(
                                              state.currentSongDuration % 60
                                          )}
                                </span>
                            </div>

                            <input
                                type="range"
                                className="w-full input-slider"
                                max={state.currentSongDuration}
                                value={state.currentTime}
                                onChange={(e) => {
                                    MusicController.seek(
                                        parseInt(e.target.value)
                                    );
                                }}
                            />
                        </div>
                    </div>

                    <div
                        className={`h-[80%] justify-center items-center gap-4 ${
                            view ? "hidden" : "flex"
                        }`}
                    >
                        <Button
                            icon={state.volume != 0 ? faVolumeUp : faVolumeMute}
                            onClick={MusicController.toggleMute}
                            className="h-8 w-8"
                        />
                        <Button
                            icon={faUpRightAndDownLeftFromCenter}
                            onClick={() => {
                                view ? setView(false) : setView(true);
                                document
                                    .querySelector("body")!
                                    .requestFullscreen();
                            }}
                            className="h-8 w-8"
                        />
                    </div>
                </div>
                <Button
                    icon={faDownLeftAndUpRightToCenter}
                    onClick={() => {
                        HTMLDivElement;
                        document.exitFullscreen();
                        view ? setView(false) : setView(true);
                    }}
                    className={`h-9 w-9 absolute bottom-6 right-6 ${
                        view ? "" : "hidden"
                    }`}
                />
            </div>
        </>
    );
}
