import { SocialButtonProps } from "./types"

export const SocialButton: React.FC<SocialButtonProps> = ({ selectedCategory, setSelectedCategory, value, image, id }) => {
  const handleClick = () => {
    setSelectedCategory(id)
  }

  return (
    <button onClick={handleClick} className={`${selectedCategory === id ? "border-2 border-[#006DF0] text-[#006DF0]" : "hover:border-[#ECEEF1] hover:text-[#006DF0] text-[gray] border-[2px] border-[#eceef100]"} bg-[#FFFFFF80] first-letter:text-sm text-nowrap rounded-[61px] transition-all font-medium text-[14px] lg:text-[16px] inline-flex items-center xl:gap-[10px] xl:pl-[11px] xl:pr-[20px] xl:py-[10px]`}>
      <div className='bg-center bg-no-repeat w-[44px] h-[44px] rounded-full' style={{ backgroundImage: `url('${image}')` }}></div>
      <span>{value}</span>
    </button>
  )
}
