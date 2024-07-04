import { BurgerButtonProps } from "./types"

export const BurgerButton: React.FC<BurgerButtonProps> = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="bg-white lg:bg-[#f7f9fb] flex justify-center items-center hover:bg-white transition-all w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] rounded-full">
      <div className="w-[18px] h-[24px] flex flex-col justify-center gap-[3px] items-center">
        <span className="w-full inline-block h-[2px] bg-black"></span>
        <span className="w-full inline-block h-[2px] bg-black"></span>
        <span className="w-full inline-block h-[2px] bg-black"></span>
      </div>
    </button>
  )
}