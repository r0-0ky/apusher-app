import { ProgressCircle } from "../../../shared/ui/progress-circle/ProgressCircle"
import { SubscribtionCardProps } from "./types"

export const SubscribtionCard: React.FC<SubscribtionCardProps> = ({ title, category, handleCreateSubscription, endDate, isActive, icon, procentRemain}) => {
  const handleClick = () => {  
    handleCreateSubscription({
      title: `Оформление подписки на ${title} в ${category.value}`,
      text: 'С подпиской на Видео в Telegram вы сможете зарабатывать, снимая Видеоролики для Рекламных Кампаний. 100% подписки предосавляется на 30 дней и истекает в течении этого времени, когда вы учавствуете в Рекламных Кампаниях.',
      days: 30,
      price: '24,00',
      tags: [
        {
          value: category.value,
          image: category.image
        },
        {
          value: title,
          image: icon,
        }
      ],
      list: ['Доступ к Рекламным Кампаниям в Telegram', 'Доступ к Видео Контену для рекламы']
    })
  }
  
  return (
    <article className={`${isActive ? 'min-h-[308px]' : 'min-h-[260px]'} p-[15px] md:min-h-[400px] relative overflow-hidden flex flex-col rounded-[30px] bg-white`}>
      <div className="flex justify-between flex-1">
        <div>
          <p className="xl:text-[20px] text-[16px] pt-[4px] md:text-[18px] md:pt-[10px] font-medium">{title}</p>
          {isActive ?
            <div className="text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] text-[#00000080] xl:mt-[7px] flex flex-col">
              <p>Оcтсалось подписки:</p>
              <p className="text-[#006DF0]">{endDate}</p>
            </div>
          :
            <p className="md:text-[16px] text-[14px] leading-[16px] text-[#00000080] md:leading-[20px] mt-[6px]">Получите доступ к этому типу контента, чтобы использовать его в Рекламных Кампаниях</p>
          }
        </div>
        <div className='bg-center flex-shrink-0 bg-white border-[1px] border-[#ECEEF1] bg-no-repeat w-[39px] h-[39px] md:w-[52px] md:h-[52px] bg-[length:24px_24px] rounded-full' style={{ backgroundImage: `url('${icon}')` }}></div>
      </div>
      {isActive && 
        <div className="absolute w-[190px] h-[190px] md:w-[230px] bottom-[20px] right-[-45px] md:h-[230px]">
          <ProgressCircle percentage={procentRemain} color="#006DF0" />
        </div>
      }
      {isActive ?
        <div className="border-[1px] self-start border-[#ECEEF1] inline-block bg-[FFFFFF80] backdrop-blur-[2.5px] p-[5px] rounded-[67px]">
          <div className="bg-[#FFFFFF80] text-[14px] md:text-[16px] rounded-[49px] px-[10px] py-[5px] md:px-[20px] md:py-[13px] xl:py-[19px] text-[#006DF0] font-normal">
            <span className="font-medium md:font-semibold">{procentRemain} %</span> Подпиcки осталось
          </div>
        </div>
      :
        <button onClick={handleClick} className="bg-black self-start z-10 hover:opacity-90 transition-all text-white font-medium text-[14px] py-[13px] px-[21px] md:text-[16px] md:px-[26px] md:py-[19px] xl:px-[30px] xl:py-[24px] rounded-[61px]">Оформить подписку</button>
      }
    </article>
  )
}