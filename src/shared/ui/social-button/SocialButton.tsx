import { SocialButtonProps } from "./types"

export const SocialButton: React.FC<SocialButtonProps> = ({ selectedCategoryId, setSelectedCategoryId, value, image, disableImage, id, isConnected }) => {
  const handleClick = () => {
    setSelectedCategoryId(id)
  }

  return (
    <button onClick={handleClick} className={`${selectedCategoryId === id ? "border-2 border-[#006DF0] text-[#006DF0]" : "hover:border-[#ECEEF1] hover:text-[#006DF0] text-[gray] border-[2px] border-[#eceef100]"} bg-[#FFFFFF80] first-letter:text-sm text-nowrap rounded-[61px] transition-all font-medium text-[14px] lg:text-[16px] inline-flex items-center gap-[10px] pr-[18px] pl-[7px] py-[8px] lg:pl-[7px] lg:py-[10px] lg:pr-[23px] xl:pl-[11px] xl:pr-[20px] xl:py-[10px]`}>
      {isConnected ? 
        <div className='bg-center bg-no-repeat bg-cover lg:w-[40px] w-[26px] h-[26px] lg:h-[40px] xl:w-[44px] xl:h-[44px] rounded-full' style={{ backgroundImage: `url('${image}')` }}></div>
      :
        <div className='bg-center bg-no-repeat bg-cover lg:w-[40px] w-[26px] h-[26px] lg:h-[40px] xl:w-[44px] xl:h-[44px] rounded-full' style={{ backgroundImage: `url('${disableImage}')` }}></div>
      }
      <span>{value}</span>
    </button>
  )
}
