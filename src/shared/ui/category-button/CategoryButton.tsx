import { CategoryButtonProps } from "./types"

export const CategoryButton: React.FC<CategoryButtonProps> = ({ selectedCategory, setSelectedCategory, value, id, image }) => {
  const handleClick = () => {
    setSelectedCategory(id)
  }

  return (
    <button onClick={handleClick} className={`${selectedCategory === id ? "border-2 border-[#006DF0] text-[#006DF0]" : "hover:border-[#ECEEF1] hover:text-[#006DF0] text-[gray] border-[2px] border-[#eceef100]"} bg-[#ffffff] first-letter:text-sm  inline-flex items-center text-nowrap rounded-[61px] transition-all font-medium text-[14px] lg:text-[16px] px-[20px] py-[9px] lg:px-[25px] lg:py-[18px] xl:py-[20px]`}>
      {image && <div className='bg-center bg-no-repeat w-[44px] h-[44px] rounded-full' style={{ backgroundImage: `url('${image}')` }}></div>}
      <span>{value}</span>
    </button>
  )
}