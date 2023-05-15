"use client";
import AlbumSection from "@/components/AlbumSection";
import { SearchInput } from "@/components/UiElements";
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
            <div className="flex-1 h-[calc(100vh-20px)]  w-full overflow-hidden scroll-smooth">
                <div className="h-12 w-full flex justify-start items-center gap-2 top-0 p-4 pl-4 z-40">
                    <SearchInput />
                </div>
                <div className="w-full h-[90%] pt-11 flex flex-col gap-8 last:pb-24 overflow-y-auto">
                    <AlbumSection name="Continue listening" data={data} type={1}/>
                    <AlbumSection name="Continue listening" data={data2} type={2}/>
                    <AlbumSection name="Continue listening" data={data2} type={2}/>
                </div>
            </div>
        </>
    );
}
