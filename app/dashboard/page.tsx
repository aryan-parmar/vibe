"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Album from "@/components/Album";
import { Metadata } from "next";
import AlbumSection from "@/components/AlbumSection";

let data = [
    {
        name: "landslide",
        cover: "/cover6.jpg",
        src: "https://www.trendmusics.com/wp-content/uploads/2022/06/Landslide_-_Oh_Wonder_trendmusics.com.mp3",
        artist: "Oh wonder",
    },
    {
        name: "starboy",
        cover: "/cover2.jpg",
        src: "/song.mp3",
        artist: "The Weekend",
    },
    {
        name: "basti ka hasti",
        cover: "/cover3.jpg",
        src: "/song.mp3",
        artist: "basti ka hasti",
    },
    {
        name: "this is what falling in love feels",
        cover: "/cover4.jpg",
        src: "/song.mp3",
        artist: "JVKE",
    },
];
let data2 = [
    {
        name: "landslide",
        cover: "/cover6.jpg",
        src: "https://www.trendmusics.com/wp-content/uploads/2022/06/Landslide_-_Oh_Wonder_trendmusics.com.mp3",
        artist: "basti ka hasti",
    },
    {
        name: "starboy",
        cover: "/cover2.jpg",
        src: "/song.mp3",
        artist: "The Weekend",
    },
    {
        name: "basti ka hasti",
        cover: "/cover3.jpg",
        src: "/song.mp3",
        artist: "basti ka hasti",
    },
    {
        name: "this is what falling in love feels",
        cover: "/cover4.jpg",
        src: "/song.mp3",
        artist: "JVKE",
    },
    {
        name: "untill i found you",
        cover: "/cover5.jpeg",
        src: "/song2.mp3",
        artist: "Stephan Sanchez",
    },
];

export default function DashboardLayout() {
    return (
        <>
            <div className="flex-1 h-[calc(100vh-20px)] overflow-y-auto w-full overflow-x-hidden scroll-smooth">
                {/* <Link href={"dashboard"} className="relative">
          <div className="absolute inset-0 w-full h-full bg-[linear-gradient(360deg,rgba(0,0,0,0.8),transparent)]"></div>
        </Link> */}
                <div className="h-12 w-full flex justify-start items-center gap-2 sticky top-0 p-4 pl-4 z-40 bg-[#10151ef1]">
                    {/* <div className="flex gap-3">
                        <Link
                            href={""}
                            className="w-9 h-9 bg-[#b3b3b350] mix-blend-color-dodge backdrop-blur-lg flex justify-center items-center rounded-full"
                        >
                            <FontAwesomeIcon
                                icon={faCaretLeft}
                                className="text-white h-[20px] w-[20px]"
                            />
                        </Link>
                        <Link
                            href={""}
                            className="w-9 h-9 bg-[#b3b3b350] mix-blend-color-dodge backdrop-blur-lg flex justify-center items-center rounded-full"
                        >
                            <FontAwesomeIcon
                                icon={faCaretRight}
                                className="text-white h-[20px] w-[20px]"
                            />
                        </Link>
                    </div> */}
                    <div className="h-9 flex justify-center items-center rounded-lg bg-[#4f4f4f70]">
                        <label
                            htmlFor="search"
                            className="h-full flex gap-1 justify-center items-center pl-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-auto h-[50%] fill-white"
                            >
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </label>
                        <input
                            placeholder="Search..."
                            id="search"
                            className="w-full h-full border-none flex-1 outline-none pl-2 text-white font-semibold bg-transparent"
                        ></input>
                    </div>
                </div>
                <div className="w-full h-auto pt-11 flex flex-col gap-8 last:pb-24">
                    <AlbumSection name="Continue listening" data={data} type={1}/>
                    <AlbumSection name="Continue listening" data={data2} type={2}/>
                    <AlbumSection name="Continue listening" data={data2} type={2}/>
                </div>
            </div>
        </>
    );
}
