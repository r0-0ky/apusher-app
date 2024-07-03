import { Link } from "react-router-dom"
import { ArticleCardProps } from "./types"
import { ReadTime } from '../../../shared/ui/read-time/ReadTime';

export const ArticleCard: React.FC<ArticleCardProps> = ({ title, subtitle, text, path, tags, readingTime }) => {
  return (
    <article className="bg-[#f7f9fb] px-[15px] py-[16px] rounded-[30px] flex flex-col">
      <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-0 flex-1 justify-between items-start">
        <p className="font-medium mt-[17px] sm:max-w-[629px] leading-[20px] text-[18px] lg:text-2xl">{title}</p>
        <ReadTime time={readingTime} />
      </div>
      <div className="flex gap-[5px] flex-wrap mt-[2px] lg:mt-[17px] items-center">
        {tags.map((tag, index) => (
          <span className="text-[#006DF0] font-normal text-[12px] lg:text-[14px] bg-[#f3f5f8] rounded-[71px] py-[5px] px-[15px]" key={index}>{tag}</span>
        ))}
      </div>
      <div className="bg-[#f3f5f8] rounded-[30px] py-[20px] px-[20px] lg:px-[30px] mt-[10px]">
        <p className="font-medium text-[16px] leading-[18px]">{subtitle}</p>
        <p className="font-normal text-[14px] mt-[10px] leading-[17px]">{text}</p>
      </div>
      <Link replace={true} className="self-start inline-block mt-[20px] bg-black font-normal text-[14px] lg:text-[16px] text-white py-[12px] lg:py-[20px] xl:py-[24px] px-[50px] rounded-[61px] hover:opacity-90 transition-all" to={path}>Читать Подробнее</Link>
    </article>
  )
}