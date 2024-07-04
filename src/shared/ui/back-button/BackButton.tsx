import { Link } from "react-router-dom"
import { BackButtonProps } from "./types"

export const BackButton: React.FC<BackButtonProps> = ({ path }) => {
  return (
    <Link to={path} className="bg-[#f7f9fb] flex-shrink-0 inline-block bg-back-arrow bg-no-repeat bg-center w-[44px] h-[44px] lg:w-[60px] lg:h-[60px] xl:w-[67px] xl:h-[67px] rounded-full"></Link>
  )
}