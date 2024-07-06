import React from "react";
import { Modal } from "../../../shared/ui/modal"
import { SubscriptionModalProps, UserTypes } from "./types"
import { CurrentUserContext } from "../../../app/contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import plusIcon from "../../../app/assets/icons/plus.svg";

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isHidden, setIsHidden, title, text, days, price, list, tags }) => {
  const user = React.useContext<UserTypes>(CurrentUserContext); 

  const handleClick = () => {
    console.log('Подписка оформлена');
    setIsHidden(true)
  }

  const handleClose = () => {
    setIsHidden(true)
  }

  const dayTitle = (num: number) => {
    if (num > 10 && [11, 12, 13, 14].includes(num % 100)) return 'дней';
    const lastNum = num % 10;
    if (lastNum === 1) return 'день';
    if ([2, 3, 4].includes(lastNum)) return 'дня';
    if ([5, 6, 7, 8, 9, 0].includes(lastNum)) return 'дней';
}

  return (
    <Modal width='733px' isHidden={isHidden} setIsHidden={setIsHidden}>
      <div className="flex mt-[5px] md:mt-0 justify-between items-center">
        <p className="text-[18px] leading-[22px] max-w-[220px] md:max-w-full md:text-2xl font-medium">{title}</p>
        <button onClick={handleClose} className="w-[14px] self-start h-[14px] hover:opacity-70 transition-all inline-block bg-close bg-center bg-no-repeat"></button>
      </div>
      <div className="mt-[20px] p-[15px] rounded-[20px] bg-[#FFFFFF80] leading-[17px] md:leading-[20px] text-[14px] md:text-[16px] font-medium text-[#00000080]">{text}</div>
      <div className="mt-[20px] md:mt-[13px] md:gap-[20px] flex justify-between">
        <div className="md:flex-1">
          <p className="text-[14px] text-[#00000080]">Стоимость и срок подписки:</p>
          <div className="px-[18px] py-[15px] md:mt-[10px] bg-[#FFFFFF80] rounded-[20px]">
            <div className="flex gap-[5px]">
              {tags.map(({ value, image }, index) => (
                <div key={index} className="inline-flex px-[10px] py-[3px] rounded-[42px] boreder-[#ECEEF1] border-[1px] items-center gap-[10px]">
                  <span className="text-[14px]">{value}</span>
                  <div className='bg-center bg-no-repeat w-[17px] h-[17px] bg-cover rounded-full' style={{ backgroundImage: `url('${image}')` }}></div>
                </div>
              ))}
            </div>
            <p className="font-semibold mt-[8px] text-[32px] md:text-[36px] text-[#006DF0]">{days} <span className="text-[24px] md:text-[32px] font-normal">{dayTitle(days)}</span><span className="text-[24px] md:text-[32px] font-normal text-black"> за </span>{price} <span className="text-[24px] md:text-[32px] uppercase font-normal">push</span></p>
            <div className="mt-[10px] md:mt-[5px] flex flex-col gap-[5px]">
              {list.map((item, index) => (
                <p className="text-[14px] text-[#00000080] before:content-[''] flex items-center gap-[10px] before:inline-block before:bg-done before:w-[20px] before:h-[20px]" key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <p className="text-[14px] text-[#00000080]">У вас на счету:</p>
          <div className="mt-[10px] bg-[#FFFFFF80] flex items-center gap-[5px] rounded-[67px] p-[5px]">
            <Link to='/profile' className="border-[3px] transition-all hover:border-[#ECEEF1] border-white bg-center bg-no-repeat w-[50px] h-[50px] rounded-full flex items-center justify-center" style={{ backgroundImage: `url('${user.avatar}')` }}></Link>
            <Link to="/#" className="bg-white border-[1px] transition-all border-[#eceef100] hover:border-[#ECEEF1] px-[20px] py-[13px] rounded-[49px]">
              <span className="text-[#006DF0] text-[16px] font-medium">{user.balance} </span>
              <span className="uppercase text-[grey] text-[14px] font-normal">push</span>
            </Link>
            <Link to='/#' className="border-[1px] transition-all hover:border-[#ECEEF1] bg-white border-white bg-center bg-no-repeat w-[50px] h-[50px] rounded-full flex items-center justify-center" style={{ backgroundImage: `url('${plusIcon}')` }}></Link>
          </div>
        </div>
      </div>
      <button onClick={handleClick} className="bg-[#006DF0] w-full md:w-auto hover:bg-[#0064DC] transition-all border-[1px] border-[#006cf000] hover:border-[#edeef1] text-white font-medium text-[14px] md:text-[16px] mt-[38px] md:mt-[40px] rounded-[73px] py-[10px] md:py-[16px] md:px-[50px]">Оформить подписку</button>
    </Modal>
  )
}