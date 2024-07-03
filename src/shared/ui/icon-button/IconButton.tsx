import { Link } from "react-router-dom"
import { IconButtonProps } from "./types"

export const IconButton: React.FC<IconButtonProps> = ({ value, image, path }) => {
  return (
    <Link to={path} className='bg-[#ffffff] hover:border-[#ECEEF1] flex border-[1px] border-[#eceef100] transition-all hover:bg-[#F7F9FB] rounded-[61px] items-center gap-[10px] px-[25px] lg:py-[18px] xl:py-[24px] font-normal text-[16px] text-[#006DF0]'>
      <div className={`bg-[url('${image}')] bg-center bg-no-repeat w-6 h-6`} style={{ backgroundImage: `url('${image}')` }}></div>
      <span className="text-nowrap">{value}</span>
    </Link>
  )
}