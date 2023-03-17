import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMusic, faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Sidenav = () => {
  return (
    <div className="h-full z-10 rounded-r-2xl backdrop-blur-md flex flex-col justify-start items-center sidenav flex-[0.2] inset-0 gap-4">
      <h1 className="logo text-2xl p-5">Vibe</h1>
      <div className="flex flex-col justify-start items-center w-full gap-4">
        <Link
          href={""}
          className="w-[83%] flex justify-start items-center gap-3 bg-[rgba(66,66,66,0.4)] rounded-lg bg-blend-darken"
        >
          <img src={"https://www.hollywoodreporter.com/wp-content/uploads/2021/04/GettyImages-1300912198-1617571742.jpg?w=1296"} alt={"profile"} height={20} width={20} className="object-cover h-[20px] w-[20px] rounded-full m-3 ml-[22px]"/>
          <h3>Profile</h3>
        </Link>
        <Link
          href={""}
          className="w-[83%] flex justify-start items-center gap-3 bg-[rgba(66,66,66,0.4)] rounded-lg bg-blend-darken"
        >
          <FontAwesomeIcon icon={faHouse} className="text-white h-[20px] w-[20px] m-3 ml-[22px]" />
          <h3>Home</h3>
        </Link>
        <Link
          href={""}
          className="w-[83%] flex justify-start items-center gap-3 bg-[rgba(66,66,66,0.4)] rounded-lg bg-blend-darken"
        >
          <FontAwesomeIcon icon={faMusic} className="text-white h-[20px] w-[20px] m-3 ml-[22px]" />
          <h3>Playlists</h3>
        </Link>
        <Link
          href={""}
          className="w-[83%] flex justify-start items-center gap-3 bg-[rgba(66,66,66,0.4)] rounded-lg bg-blend-darken"
        >
          <FontAwesomeIcon icon={faHeart} className="text-white h-[20px] w-[20px] m-3 ml-[22px]" />
          <h3>Liked</h3>
        </Link>
        
      </div>
    </div>
  );
};

export default Sidenav;
