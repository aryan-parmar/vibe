"use client";
import { useMusicController } from "@/hooks/useMusicController";
import { useEffect, useRef } from "react";
import { Button } from "./UiElements";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function Album(props: {
    cover: string;
    name: string;
    artist: string;
    src: string;
    playlist: string;
    _id: string;
}) {
    let cover = useRef<HTMLDivElement>(null);
    let coverAmbient = useRef<HTMLDivElement>(null);
    let state = useMusicController();
    const router = useRouter();
    useEffect(() => {
        if (cover && coverAmbient) {
            cover.current!.style.backgroundImage = `url(${props.cover})`;
            coverAmbient.current!.style.backgroundImage = `url(${props.cover})`;
        }
    }, []);
    function play() {
        console.log("play");
        state.playSong(props.src, props.name, props.artist, props.cover);
    }
    return (
        <div
            className="album relative"
            onClick={() => {
                router.push(`/playlist/${props._id}`);
            }}
        >
            <div
                className="aspect-square w-[85%] bg-cover rounded-lg overflow-hidden absolute top-[50%] inset-x-1/2 -translate-x-1/2 -translate-y-1/2 z-0 backdrop-brightness-150"
                ref={coverAmbient}
            ></div>
            <div className="w-full h-full bg-cover rounded-lg overflow-hidden bg-center opacity max-h-[300px] max-w-[300px] p-3 md:p-4 bg-[rgba(62,62,62,0.6)] z-20 relative backdrop-blur-3xl">
                <div
                    className="aspect-square w-full bg-cover rounded-lg overflow-hidden relative"
                    ref={cover}
                >
                    <div className="absolute inset-0 w-full h-full bg flex justify-center items-center opacity-0 hover:opacity-100 transition-all cursor-pointer">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            className="w-4 fill-white"
                        >
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg> */}
                    </div>
                </div>
                <div className=" flex justify-between items-center mt-2 md:h-10 relative">
                    <h2 className="font-semibold text-md text-[#d7d7d7] capitalize max-w-[100%] w-[10rem] overflow-hidden whitespace-nowrap">
                        {props.name}
                    </h2>
                    <Button
                        icon={faPlay}
                        className={
                            "!bg-[#6475d3] h-10 w-10 hidden md:block absolute right-0 top-0 shadow-xl play-btn"
                        }
                        onClick={(e) => {
                            e.stopPropagation();
                            play();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
