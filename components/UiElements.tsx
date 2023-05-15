import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function NavBtn(props: {
    icon: IconProp | undefined;
    text: string;
    href: string | undefined;
}) {
    return (
        <Link
            href={""}
            className="w-[83%] flex justify-start items-center gap-3 bg-[rgba(66,66,66,0.4)] rounded-lg"
        >
            {props.icon ? (
                <FontAwesomeIcon
                    icon={props.icon}
                    className="text-white h-[20px] w-[20px] m-3 ml-[22px]"
                />
            ) : (
                <img
                    src={props.href}
                    alt={"profile"}
                    height={20}
                    width={20}
                    className="object-cover h-[20px] w-[20px] rounded-full m-3 ml-[22px]"
                />
            )}
            <h3>{props.text}</h3>
        </Link>
    );
}

function SearchInput() {
    return (
        <div className="h-9 flex justify-center items-center rounded-lg bg-[rgba(128,128,128,0.24)] w-96">
            <label
                htmlFor="search"
                className="h-full flex gap-1 justify-center items-center pl-3"
            >
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="font-bold"
                />
            </label>
            <input
                placeholder="Search..."
                id="search"
                className="w-full h-full border-none flex-1 outline-none pl-2 text-white font-semibold bg-transparent placeholder:text-[#ffffff100]"
            ></input>
        </div>
    );
}

function Button(props: { icon: IconProp | undefined; onClick: () => void, className: string }) {
    return (
        <button className={`rounded-full bg-[rgba(157,165,208,0.2)] flex justify-center items-center ${props.className}`} onClick={props.onClick}>
            {props.icon && (
                <FontAwesomeIcon
                    icon={props.icon}
                    className="text-white h-[45%]"
                />
            )}
        </button>
    );
}

export { NavBtn, SearchInput, Button };
