import { faHouse, faMusic, faHeart } from "@fortawesome/free-solid-svg-icons";
import { NavBtn } from "./UiElements";

const Sidenav = () => {
  return (
    <div className="h-full z-10 rounded-r-2xl backdrop-blur-md flex flex-col justify-start items-center sidenav flex-[0.2] inset-0 gap-4">
      <h1 className="logo text-2xl p-5">Vibe</h1>
      <div className="flex flex-col justify-start items-center w-full gap-4">
        <NavBtn icon={undefined} text={"profile"} href={"https://www.hollywoodreporter.com/wp-content/uploads/2021/04/GettyImages-1300912198-1617571742.jpg?w=1296"} />
        <NavBtn icon={faHouse} text={"Home"} href={""} />
        <NavBtn icon={faMusic} text={"Playlists"} href={""} />
        <NavBtn icon={faHeart} text={"Liked"} href={""} />
      </div>
    </div>
  );
};

export default Sidenav;
