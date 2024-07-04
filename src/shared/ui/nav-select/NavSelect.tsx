import { Link, useLocation } from "react-router-dom";
import { NavSelectProps } from "./types";
import React from "react";

export const NavSelect: React.FC<NavSelectProps>= ({ selectsArr }) => {
  const [isHidden, setIsHidden] = React.useState(true);
  const location = useLocation().pathname;

  const handleEnter = () => {
    setIsHidden(false)
  }

  const handleLeave = () => {
    setIsHidden(true)
  }

  return (
    <div onMouseLeave={handleLeave} onMouseEnter={handleEnter}>
      <button className={`${selectsArr.some((select) => select.path === location) ? "bg-black text-white after:bg-arrow-list-white" : "bg-[#f7f9fb] hover:bg-white transition-all after:bg-arrow-list"} ${isHidden ? "after:rotate-180" : "after:rotate-0"} after:content-[''] flex items-center gap-[14px] after:inline-block after:w-[10px] after:h-[5px] text-sm rounded-[60px] font-medium p-[25px]`}>{selectsArr.some((select) => select.path === location) ? selectsArr.filter((select) => select.path === location)[0].value : selectsArr.filter((select) => select.selected)[0].value}</button>
      {!isHidden && <div className="absolute mt-[3px] flex flex-col border-[1px] border-[#ECEEF1] bg-[#F7F9FB] before:w-full before:h-[3px] before:absolute before:top-[-3px] p-[10px] rounded-[20px]">
        {selectsArr.map((select) => (
          <Link className={`${location === select.path ? "bg-white text-black" : ""} group font-normal flex items-center gap-[10px] transition-all hover:text-black px-[15px] py-[13px] text-lg text-[gray] rounded-[15px]`} to={select.path}>
            <div className={`${location === select.path ? "bg-black" : "bg-[gray]"} w-[20px] h-[20px] bg-no-repeat transition-all group-hover:bg-black bg-center`} style={{maskImage: `url('${select.image}')`, maskRepeat: "no-repeat", maskPosition: "center", maskSize: "cover" }}></div>
            <span>{select.value}</span>
          </Link>
        ))}
      </div>}
    </div>
  )
}