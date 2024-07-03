export const SearchInput: React.FC = () => {
  return (
    <div className='flex items-center px-[15px] xl:px-[30px] gap-[10px] py-[12px] xl:py-[22px] bg-[#f7f9fb] rounded-[61px] w-full'>
      <button className="bg-search hover:opacity-85 transition-all w-[20px] h-[20px] xl:w-6 xl:h-6"></button>
      <input className="flex-1 bg-[#f7f9fb] outline-none border-none font-normal text-[14px] xl:text-[16px]" type="text" placeholder="Поиск по статьям" />
    </div>
  )
}