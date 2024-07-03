import { Link } from "react-router-dom"
import { BalanceButtonProps } from "./types"

export const BalanceButton: React.FC<BalanceButtonProps> = ({ value }) => {
  return (
    <Link to={"/#"} className="text-[14px] p-[10px] text-nowrap lg:text-[16px] bg-white lg:bg-[#fbfcfd] hover:bg-white hover:border-[#ECEEF1] xl:hover:px-[24px] transition-all xl:hover:py-[23px] hover:border-[1px] lg:py-[15px] xl:py-[19px] lg:px-[20px] rounded-[49px] lg:border-[5px] border-[#f7f9fb]">
      <span className="text-[#006DF0] font-medium">{value} </span>
      <span className="uppercase text-[grey] font-normal">push</span>
    </Link>
  )
}