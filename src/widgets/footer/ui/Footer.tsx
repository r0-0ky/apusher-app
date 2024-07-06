import React from "react";
import { Link, useLocation } from "react-router-dom";
import subscriptionsIcon from "../../../app/assets/icons/subscriptions.svg";
import walletIcon from "../../../app/assets/icons/wallet.svg";
import listIcon from "../../../app/assets/icons/list_alt.svg";
import { UserTypes } from "./types";
import { CurrentUserContext } from "../../../app/contexts/CurrentUserContext";

export const Footer: React.FC = () => {
  const user = React.useContext<UserTypes>(CurrentUserContext); 
  const location = useLocation().pathname;
  const [navLinks] = React.useState([
    {
      image: subscriptionsIcon,
      path: '/subscriptions',
      isClearImage: false,
    },
    {
      image: listIcon,
      path: '/complete-order',
      isClearImage: false,
    },
    {
      image: walletIcon,
      path: '/finance',
      isClearImage: false,
    },
    {
      image: user.avatar,
      path: '/profile',
      isClearImage: true,
    }
  ])
  return (
    <footer className="bg-white md:hidden">
      <nav className="flex justify-around items-center py-[15px]">
        {navLinks.map(({path, image, isClearImage}, index) => (
          isClearImage ? 
            <Link key={index} to={path} className="w-[24px] h-[24px] bg-cover rounded-full bg-no-repeat bg-center" style={{backgroundImage: `url('${image}')`}}></Link>
          :
            <Link to={path} className={`${location === path ? "bg-[#006DF0]" : "bg-[gray] hover:bg-black"} transition-all w-[24px] h-[24px] bg-[#006DF0] bg-center bg-no-repeat inline-block`} style={{maskImage: `url(${image})`, maskRepeat: "no-repeat", maskPosition: "center", maskSize: "24px 24px"}} key={index}></Link>
          ))}
      </nav>
    </footer>
  )
}