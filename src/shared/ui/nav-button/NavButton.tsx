import { Link } from "react-router-dom";
import { NavButtonProps } from "./types";
import { useLocation } from 'react-router-dom';

export const NavButton: React.FC<NavButtonProps> = ({ value, path }) => {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <Link to={path} className={`${location === path ? "bg-black text-white" : "bg-[#f7f9fb] hover:bg-white transition-all"} text-sm inline-block rounded-[60px] font-medium p-[24px]`}>{value}</Link>
  )
};