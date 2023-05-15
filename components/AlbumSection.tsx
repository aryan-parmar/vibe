import { useEffect } from "react";
import { useMusicController } from "@/hooks/useMusicController";
import Album from "./Album";
export default function AlbumSection(props: {
    name: string;
    data: Array<any>;
    type: Number;
}) {
    let Music = useMusicController();
    useEffect(() => {
        Music.setQueue(props.data);
    }, []);
    return (
        <>
            <div>
                <div className="px-4 flex justify-between w-full pb-4">
                    <h1 className="font-bold text-xl text-[#dcdcdc]">
                        {props.name}
                    </h1>
                </div>
                <div
                    className={`w-[96%] mx-4 pr-10 gap-10 ${
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
