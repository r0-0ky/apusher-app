import { Link } from "react-router-dom"
import { IconButton } from "../../../shared/ui/icon-button"
import { QuestionCardProps } from './types';

export const QuestionCard: React.FC<QuestionCardProps> = ({ title, text, path, buttonValue, buttonImage, buttonPath }) => {
  return (
    <article className="bg-[#f3f5f8] rounded-[30px] flex justify-between items-center px-[20px] py-[17px] lg:px-[30px] lg:py-[20px] xl:py-[21px]">
      <div>
        <p className="font-medium ml-2 text-[16px] lg:mt-[4px] xl:mt-0 lg:text-2xl">{title}</p>
        <p className="font-normal text-[14px] max-w-[594px] xl:w-full xl:max-w-[1250px] leading-[17px] lg:leading-[19px] lg:text-[16px] mt-[7px] lg:mt-[8px] xl:mt-[10px]">{text}</p>
        <Link className="font-normal text-[14px] lg:text-[16px] before:content-[''] hover:opacity-70 transition-all px-[25px] py-[12px] inline-flex rounded-[61px] bg-[#FFFFFF80] gap-[10px] before:bg-blue-list before:bg-cover before:h-[20px] before:w-[20px] lg:bg-transparent lg:before:h-6 lg:before:w-6 text-[#006DF0] lg:p-0 mt-[20px] lg:mt-[10px] lg:underline" to={path}>Открыть статью</Link>
      </div>
      <div className="hidden lg:block">
        <IconButton path={buttonPath} value={buttonValue} image={buttonImage} />
      </div>
    </article>
  )
}