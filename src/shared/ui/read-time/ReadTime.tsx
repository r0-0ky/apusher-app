import { ReadTimeProps } from "./types"

export const ReadTime: React.FC<ReadTimeProps> = ({ time }) => {
  return (
    <div className="text-nowrap border-[1px] px-[15px] py-[4px] lg:px-[20px] lg:py-[16px] rounded-[53px] text-[gray] flex before:content-[''] before:bg-cover before:bg-read-time before:w-[16px] before:h-[16px] lg:before:w-[20px] lg:before:h-[20px] text-[12px] lg:text-[14px] font-normal items-center gap-[10px] border-[#eceef1]">{time} мин.</div>
  )
}