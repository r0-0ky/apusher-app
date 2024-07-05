import { Link } from "react-router-dom"
import { BurgerNavButton } from "../burger-nav-button"
import { BurgerMenuProps } from "./types"

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ navBurgerList, setIsHidden, isHidden }) => {
  const handleClick = () => {
    setIsHidden(true)
  }
  
  return (
    <section onClick={handleClick} className={`absolute ${isHidden ? 'hidden' : 'block'} stop-0 left-0 z-50 w-full bg-[#00000080] h-screen`}>
      <div onClick={e => e.stopPropagation()} className={`relative px-[15px] py-[20px] lg:px-[45px] lg:py-[35px] flex flex-col w-3/4 sm:w-1/2 h-screen overflow-hidden bg-[#EFF2F7]`}>
        <div className="flex justify-between items-center">
          <Link to={'/'} className="text-2xl font-semibold">Apusher</Link>
          <button onClick={handleClick} className="w-[14px] h-[14px] hover:opacity-70 transition-all inline-block bg-close bg-center bg-no-repeat"></button>
        </div>
        <nav className="mt-[30px] lg:mt-[119px] flex-1 flex flex-col gap-[10px]">
          {navBurgerList.map((button, index) => (
            <BurgerNavButton key={index} {...button} />
          ))}
        </nav>
        <Link className="before:content-[''] hover:opacity-70 transition-all px-[10px] py-[7px] mb-[31px] lg:mb-[91px] bg-cover gap-[10px] text-[gray] text-[16px] flex before:bg-support before:w-[24px] before:h-[24px]" to={'/#'}>Помощь</Link>
      </div>
    </section>
  )
}