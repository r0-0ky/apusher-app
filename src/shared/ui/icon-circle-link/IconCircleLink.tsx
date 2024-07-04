import { Link } from "react-router-dom"
import { IconCircleLinkProps } from "./types"

export const IconCircleLink: React.FC<IconCircleLinkProps> = ({ image, path }) => {
  return (
    <Link to={path} className="bg-white lg:bg-[#f7f9fb] hover:border-[1px] hover:border-[#ECEEF1] hover:bg-white transition-all w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] xl:w-[67px] xl:h-[67px] rounded-full flex items-center justify-center">
      <div className='bg-center bg-no-repeat w-[44px] h-[44px] rounded-full' style={{ backgroundImage: `url('${image}')` }}></div>
    </Link>
    
  )
}