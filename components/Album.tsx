"use client";
import { useMusicController } from "@/hooks/useMusicController";
import React, { useEffect, useRef } from "react";

export default function Album(props: {
  cover: string;
  name: string;
  artist: string;
  src: string;
}) {
  let cover = useRef<HTMLDivElement>(null);
  let coverAmbient = useRef<HTMLDivElement>(null);
  let state = useMusicController()
  useEffect(() => {
    if (cover && coverAmbient) {
      cover.current!.style.backgroundImage = `url(${props.cover})`;
      coverAmbient.current!.style.backgroundImage = `url(${props.cover})`;
    }
  }, []);
  function play() {
    console.log("play")
    state.playSong(props.src, props.name, props.artist, props.cover)
  }
  return (
    <div className="w-full relative max-w-[300px] max-h-[300px]">
      <div
        className="aspect-square w-[85%] bg-cover rounded-lg overflow-hidden absolute top-[40%] inset-x-1/2 -translate-x-1/2 -translate-y-1/2 z-0 filter"
        ref={coverAmbient}
      ></div>
      <div className="w-full bg-cover rounded-lg overflow-hidden bg-center opacity max-h-[300px] max-w-[300px] p-3 bg-[#3e3e3e52] z-20 relative backdrop-blur-3xl">
        <div
          className="aspect-square w-full bg-cover rounded-lg overflow-hidden relative"
          ref={cover}
        >
          <div className="absolute inset-0 w-full h-full bg flex justify-center items-center opacity-0 hover:opacity-100 transition-all cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-4 fill-white"
              onClick={()=>play()}
            >
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
          </div>
        </div>
        <h2 className="font-bold text-md opacity-70 text-slate-400 capitalize max-w-full overflow-hidden whitespace-nowrap">
          {props.name}
        </h2>
      </div>
    </div>
  );
}
