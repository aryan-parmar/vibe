"use client";
import AlbumSection from "@/components/AlbumSection";
import { SearchInput } from "@/components/UiElements";
import { useMusicController } from "@/hooks/useMusicController";
import { useEffect } from "react";
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
        name: "this is what falling in love feels",
        cover: "/cover4.jpg",
        src: "/song.mp3",
        artist: "JVKE",
    },
    {
        name: "untill i found you",
        cover: "/cover5.jpeg",
        src: "https://pagalworlld.com/files/download/id/3909",
        artist: "Stephan Sanchez",
    }
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
        name: "people",
        cover: "/cover3.jpeg",
        src: "https://djmaza.live/siteuploads/files/sfd28/13695/People - Libianca-(DJMaza).mp3",
        artist: "libianca",
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
        src: "https://pagalworlld.com/files/download/id/3909",
        artist: "Stephan Sanchez",
    },
];

export default function DashboardLayout() {
    let MusicController  = useMusicController();
    useEffect(() => {
        MusicController.init(data2)
    }, [])
    return (
        <>
            <div className="flex-1 md:flex-[0.85] lg:flex-[0.8] h-[calc(100vh-20px)] w-full overflow-hidden scroll-smooth">
                <div className="h-16 w-full flex justify-start items-center gap-2 top-0 p-4 pl-4 z-40">
                    <SearchInput />
                </div>
                <div className="w-full h-[90%] pt-4 flex flex-col gap-8 last:pb-24 overflow-y-auto overflow-x-hidden">
                    <AlbumSection name="Continue listening" data={data} type={1}/>
                    <AlbumSection name="Continue listening" data={data2} type={2}/>
                    <AlbumSection name="Continue listening" data={data2} type={2}/>
                </div>
            </div>
        </>
    );
}
