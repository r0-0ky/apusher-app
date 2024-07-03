import { Link } from "react-router-dom"
import { ProfileButtonProps } from './types';

export const ProfileButton: React.FC<ProfileButtonProps> = ({ image }) => {
  return (
    <Link to={"/#"} className="bg-[#f7f9fb] hover:border-[1px] hover:border-[#ECEEF1] hover:bg-white transition-all lg:w-[60px] lg:h-[60px] w-[67px] h-[67px] rounded-full flex items-center justify-center">
      <img src={image} alt="" className="w-[44px] h-[44px] lg:w-[43px] lg:h-[43px] rounded-full" />
    </Link>
  )
}