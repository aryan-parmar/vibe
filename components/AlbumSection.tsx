import React from "react";
import Album from "./Album";
export default function AlbumSection(props: {
    name: string;
    data: Array<any>;
    type: Number;
}) {
    return (
        <>
            <div>
                <div className="px-4 flex justify-between w-full pb-4">
                    <h1 className="font-bold text-xl text-slate-400">
                        {props.name}
                    </h1>
                </div>
                <div
                    className={`grid w-full px-4 pr-10 gap-10 ${
                        props.type == 1 ? "custom-grid-1" : "custom-grid"
                    }`}
                >
                    {props.data?.map((item, index) => (
                        <Album
                            name={item.name}
                            cover={item.cover}
                            artist={item.artist}
                            src={item.src}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
