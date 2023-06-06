"use client";
import AlbumSection from "@/components/AlbumSection";
import { SearchInput } from "@/components/UiElements";
import { useMusicController } from "@/hooks/useMusicController";
import { useEffect } from "react";
import data from "@/config/songs.json";
let data2 = data
let data3 = data.slice(1, 7);

export default function DashboardLayout() {
    let MusicController = useMusicController();
    useEffect(() => {
        MusicController.init(data2);
    }, []);
    return (
        <>
            <div className="flex-1 md:flex-[0.85] lg:flex-[0.8] h-[calc(100vh-20px)] w-full overflow-hidden scroll-smooth">
                <div className="h-16 w-full flex justify-start items-center gap-2 top-0 p-4 md:pl-4 z-40 bg-[rgba(66,66,66,0.2)] md:bg-transparent">
                    <h2 className="logo text-3xl block md:hidden w-full text-center">
                        Vibe
                    </h2>
                    <SearchInput className="hidden md:flex" />
                </div>
                <div className="w-full h-[78svh] md:h-[90%] pt-4 flex flex-col gap-8 last:pb-16 md:last:pb-24 overflow-y-auto overflow-x-hidden">
                    <AlbumSection
                        name="Continue listening"
                        data={data}
                        type={1}
                    />
                    <AlbumSection
                        name="Continue listening"
                        data={data2}
                        type={2}
                    />
                    <AlbumSection
                        name="Continue listening"
                        data={data3}
                        type={2}
                    />
                </div>
            </div>
        </>
    );
}
