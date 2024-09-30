import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";

import HeaderItem from "./HeaderItem";
import { useState } from "react";

function Header() {
  const [toggle,setToggle]=useState(true)
  
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center justify-between p-4">
      <div
        className="flex items-center justify-between
      "
      >
        <img
          src="./src/assets/Images/logo.png"
          className="w-[80px] md:w-[115px] object-cover"
        />

        <div className="hidden  md:flex gap-8 ">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="md:hidden flex gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}

          

          <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle?

            <div className="absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4">
              {" "}
              {menu.map(
                (item, index) =>
                  index > 2 && <HeaderItem name={item.name} Icon={item.icon} />
              )}
            </div>:null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt=""
        className="w-[40px] rounded-full"
      />
    </div>
  );
}
export default Header;
