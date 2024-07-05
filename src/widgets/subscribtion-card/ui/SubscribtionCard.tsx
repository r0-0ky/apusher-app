import { SubscribtionCardProps } from "./types"

export const SubscribtionCard: React.FC<SubscribtionCardProps> = ({ title, endDate, isActive, icon, procentRemain}) => {
  return (
    <article className="p-[15px] rounded-[30px] bg-white">
      <div className="flex justify-between">
        <div>
          <p className="text-[20px] pt-[10px] font-medium">{title}</p>
          {isActive ?
            <p className="text-[16px] flex flex-col">
              <p>Оcтсалось подписки:</p>
              <p>{endDate}</p>
            </p>
          :
            <p>Получите доступ к этому типу контента, чтобы использовать его в Рекламных Кампаниях</p>
          }
        </div>
        <div className='bg-center bg-white border-[1px] border-[#ECEEF1] bg-no-repeat w-[38px] h-[38px] bg-[length:24px_24px] rounded-full' style={{ backgroundImage: `url('${icon}')` }}></div>
      </div>
      {isActive ?
        <div className="border-[1px] border-[#ECEEF1] inline-block bg-[FFFFFF80] backdrop-blur-[2.5px] p-[5px] rounded-[67px]">
          <div className="bg-[#FFFFFF80] text-[16px] rounded-[49px] px-[20px] py-[19px] text-[#006DF0] font-normal">
            <span className="font-semibold">{procentRemain}%</span> Подпики осталось
          </div>
        </div>
      :
        <button className="bg-black text-white font-medium text-[16px] px-[30px] py-[24px] rounded-[61px]">Оформить подписку</button>
      }
    </article>
  )
}