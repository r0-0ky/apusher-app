import { Link, useLocation } from "react-router-dom"
import { BurgerNavButtonProps } from "./types"

export const BurgerNavButton: React.FC<BurgerNavButtonProps> = ({ value, path, image, isClearImage }) => {
  const location = useLocation().pathname
  return (
    <Link className={`${location === path ? "bg-white text-[#006DF0]" : ""} group font-normal flex items-center gap-[10px] transition-all hover:text-black px-[13px] py-[10px] text-[16px] text-[gray] rounded-[15px]`} to={path}>
    {!isClearImage ?
      <div className={`${location === path ? "bg-[#006DF0]" : "bg-[gray] group-hover:bg-black"} w-[20px] h-[20px] bg-no-repeat transition-all bg-center`} style={{maskImage: `url('${image}')`, maskRepeat: "no-repeat", maskPosition: "center", maskSize: "cover" }}></div>
    :
      <div className="w-[24px] h-[24px] rounded-full bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('${image}')`}}></div>
    }
    <span className={`${location === path ? "text-[#006DF0]" : ""}`}>{value}</span>
  </Link>
  )
}