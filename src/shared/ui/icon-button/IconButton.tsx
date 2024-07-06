import { Link } from "react-router-dom"
import { IconButtonProps } from "./types"

export const IconButton: React.FC<IconButtonProps> = ({ value, image, path }) => {
  return (
    <Link to={path} className='bg-[#ffffff] hover:border-[#ECEEF1] text-[14px] flex border-[1px] border-[#eceef100] transition-all hover:bg-[#F7F9FB] rounded-[61px] items-center gap-[10px] pl-[12px] pr-[18px] py-[10px] lg:py-[18px] lg:pr-[26px] lg:pl-[20px] xl:py-[24px] font-normal lg:text-[16px] text-[#006DF0]'>
      <div className={`bg-[url('${image}')] bg-[#006DF0] w-[20px] h-[20px] lg:w-6 lg:h-6`} style={{maskImage: `url('${image}')`, maskRepeat: "no-repeat", maskPosition: "center", maskSize: "24px 24px" }}></div>
      <span className="text-nowrap">{value}</span>
    </Link>
  )
}