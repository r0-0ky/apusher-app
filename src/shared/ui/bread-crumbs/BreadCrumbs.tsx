import { BreadCrumbsProps } from "./types"

export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ links }) => {

  return (
    <div className="flex flex-wrap">
      {links.map((link, index) => (
          <p className={`flex items-center max-w-[230px] gap-[5px] text-nowrap mr-[5px]`}>
            <span className={`text-[12px] lg:text-[14px] max-w-[230px] text-nowrap text-ellipsis overflow-hidden inline-block ${index === links.length - 1 ? 'text-black' : 'text-[gray]'}`} key={index}>{link.value}</span>
            <span className="text-[12px] lg:text-[14px] text-[gray]">{index === links.length - 1 ? '' : '/'}</span>
          </p>
      ))}
    </div>
  )
}