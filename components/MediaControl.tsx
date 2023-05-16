import { useContext, useEffect, useRef, useState } from "react";
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
    faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./UiElements";

export default function MediaControl() {
    let MusicController = useMusicController();
    let state = useContext(MusicControllerContext);
    let [view, setView] = useState(false);
    // let canvasRef = useRef<HTMLCanvasElement>(null);
    // let audioContext: AudioContext;
    // let analyser: AnalyserNode|null;
    // let source: MediaElementAudioSourceNode|null;
    // function renderFrame(x: number, analyser: AnalyserNode, dataArray: Uint8Array, canvasCtx: any, WIDTH: number, HEIGHT: number, barWidth:number, barHeight:number, bufferLength: number) {
    //     requestAnimationFrame(()=>{renderFrame(x, analyser, dataArray, canvasCtx, WIDTH, HEIGHT, barWidth, barHeight, bufferLength)});
    //     x = 0;
    //     analyser.getByteFrequencyData(dataArray);
    //     canvasCtx.fillStyle = "#24222e";
    //     canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
    //     for (let i = 0; i < bufferLength; i++) {
    //         barHeight = dataArray[i];
    //         let r = barHeight + 25 * (i / bufferLength);
    //         let g = 250 * (i / bufferLength);
    //         let b = 50;
    //         canvasCtx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    //         canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    //         x += barWidth + 1;
    //     }
    // }
    // useEffect(() => {
    //     if (state.initiallized && analyser && source) {
    //         source.connect(analyser);
    //         analyser.connect(audioContext.destination);
    //         analyser.fftSize = 256;
    //         let bufferLength = analyser.frequencyBinCount;
    //         let dataArray = new Uint8Array(bufferLength);
    //         let canvas = canvasRef.current as HTMLCanvasElement;
    //         let canvasCtx = canvas.getContext("2d") as CanvasRenderingContext2D;
    //         canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    //         let WIDTH = canvas.width;
    //         let HEIGHT = canvas.height;
    //         let barWidth = (WIDTH / bufferLength) * 2.5;
    //         let barHeight = 10;
    //         let x = 0;
    //         renderFrame(x,analyser, dataArray, canvasCtx, WIDTH, HEIGHT, barWidth, barHeight, bufferLength);

    //     }
    // }, [state.currentSongName, state.currentSongArt, state.currentSongArtist]);
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
                className={`bg-[#101024] transition-opacity pointer-events-none flex w-[96vw] md:w-[99vw] h-[4.5rem] absolute bottom-[10px] z-30 justify-center items-start md:items-center rounded-lg shadow-[0px_-30px_53px_0px_rgba(0,0,0,0.95)] ${
                    view ? "h-[97vh] opacity-100" : "opacity-0"
                }`}
            >
                <img
                    src={state.currentSongArt}
                    alt="cover"
                    className={`w-[70vh] rounded-lg duration-[3000ms] transition-opacity brightness-50 ${
                        view ? "h-[60vh] opacity-100" : "h-0 opacity-0"
                    }`}
                />
            </div>
            <div
                className={`w-[96vw] md:w-[99vw] h-[4.5rem] absolute bottom-[10px] z-30 flex justify-center items-center rounded-lg shadow-[0px_-30px_53px_0px_rgba(0,0,0,0.95)] transition-all duration-500 ease-in-out ${
                    view
                        ? "h-[97vh] backdrop-blur-3xl bg-[#24222e6c]"
                        : "bg-[#24222e]"
                }`}
                onClick={() => setView(!view)}
            >
                <div
                    className={`flex w-full h-full px-4 items-center ${
                        view
                            ? "flex-col justify-around md:justify-end mb-8 gap-8"
                            : "justify-between"
                    }`}
                >
                    <div
                        className={`flex items-center gap-4 w-[100%] md:w-auto justify-start md:justify-center ${
                            view ? "flex-col h-auto mt-16 md:mt-0" : "h-[80%]"
                        }`}
                    >
                        {state.initiallized && (
                            <>
                                {/* <canvas ref={canvasRef} width={500} height={200} /> */}
                                <img
                                    src={state.currentSongArt}
                                    alt="cover"
                                    className={`rounded-lg ${
                                        view
                                            ? "h-[35vh] md:h-[55vh] w-fit"
                                            : "h-full w-auto"
                                    }`}
                                />
                            </>
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
                        className={`w-[50%] h-fit flex justify-end md:justify-center items-center md:py-3 ${
                            view
                                ? "flex-col relative w-[98%] md:w-[50%]"
                                : "relative md:absolute md:left-1/2 md:-translate-x-1/2 gap-4"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-center items-center gap-3">
                            <Button
                                icon={faBackwardStep}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    MusicController.previousSong();
                                }}
                                className={`h-8 w-8 ${
                                    view ? "" : "hidden md:block"
                                }`}
                            />
                            <Button
                                icon={state.playing ? faPause : faPlay}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    MusicController.togglePlay();
                                    // if(!source || !analyser){
                                    //     audioContext= new AudioContext()
                                    //     analyser = audioContext.createAnalyser();
                                    //     source = audioContext.createMediaElementSource(state.songPlayer as HTMLAudioElement);
                                    // }
                                }}
                                className="h-9 w-9 !bg-[rgba(157,165,208,0.4)]"
                            />
                            <Button
                                icon={faForwardStep}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    MusicController.nextSong();
                                }}
                                className={`h-8 w-8 ${
                                    view ? "" : "hidden md:block"
                                }`}
                            />
                        </div>
                        <div
                            className={`w-full justify-center items-center flex-col gap-3
                        ${view ? "flex" : "hidden md:flex"}`}
                        >
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
                            view ? "hidden" : "hidden md:flex"
                        }`}
                        onClick={(e) => e.stopPropagation()}
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
                        try {
                            document.exitFullscreen();
                        } catch (error) {}
                        view ? setView(false) : setView(true);
                    }}
                    className={`h-9 w-9 absolute bottom-6 right-6 ${
                        view ? "hidden md:flex" : "hidden"
                    }`}
                />
                <Button
                    icon={faSortDown}
                    onClick={() => {
                        HTMLDivElement;
                        document.exitFullscreen();
                        view ? setView(false) : setView(true);
                    }}
                    className={`h-9 w-9 absolute top-6 left-6 ${
                        view ? "md:hidden flex" : "hidden"
                    }`}
                />
            </div>
        </>
    );
}
