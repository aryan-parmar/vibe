"use client"

interface playlist {
    id: string;
}

export default function Page({params}:{params:playlist}) {
    return (
        <div className="flex-1 md:flex-[0.85] lg:flex-[0.8] h-[calc(100vh-20px)] w-full overflow-hidden scroll-smooth">
            <h1>{params.id}</h1>
        </div>
    )
}
