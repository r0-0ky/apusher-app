import { Link } from "react-router-dom"
import { IconButton } from "../../../shared/ui/icon-button"
import { QuestionCardProps } from './types';

export const QuestionCard: React.FC<QuestionCardProps> = ({ title, text, path, buttonValue, buttonImage, buttonPath }) => {
  return (
    <article className="bg-[#f3f5f8] rounded-[30px] flex justify-between items-center p-[20px] lg:px-[30px] lg:py-[25px]">
      <div>
        <p className="font-medium ml-2 text-[16px] lg:text-2xl">{title}</p>
        <p className="font-normal max-w-[594px] text-[14px] leading-[17px] lg:text-[16px] mt-[7px] lg:mt-[6px]">{text}</p>
        <Link className="font-normal text-[14px] lg:text-[16px] before:content-[''] hover:opacity-70 transition-all px-[25px] py-[12px] inline-flex rounded-[61px] bg-[#FFFFFF80] gap-[10px] before:bg-blue-list before:bg-cover before:h-[20px] before:w-[20px] lg:before:h-6 lg:before:w-6 text-[#006DF0] mt-[20px] lg:mt-[8px] lg:underline" to={path}>Открыть статью</Link>
      </div>
      <div className="hidden lg:block">
        <IconButton path={buttonPath} value={buttonValue} image={buttonImage} />
      </div>
    </article>
  )
}