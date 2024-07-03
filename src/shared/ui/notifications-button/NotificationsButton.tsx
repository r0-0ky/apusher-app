import React from 'react';
import BellLogo from '../../images/for-notifications-button/notifications_unread_24dp_FILL0_wght400_GRAD0_opsz24 1.svg?react';
import { NotificationsButtonProps } from './types';

export const NotificationsButton: React.FC<NotificationsButtonProps> = ({ notifications }) => {
  const [isHidden, setIsHidden] = React.useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden)
  }

  return (
    <>
      <button onClick={handleClick} className="bg-notification bg-white lg:bg-[#f7f9fb] bg-no-repeat bg-center w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] xl:w-[67px] hover:border-[1px] transition-all hover:bg-white hover:border-[#ECEEF1] xl:h-[67px] rounded-full"></button>
      {!isHidden && <div className='absolute w-[497px] mt-[5px] flex flex-col items-center right-[50px] border-[1px] border-[#ECEEF1] bg-[#F7F9FB] p-[10px] rounded-[20px]'>
        <div className='flex items-center mb-[10px] gap-[5px]'>
          <p className='text-[16px] font-normal'>Ваши уведомления (<span className='text-[#EB5757]'>{notifications.length}</span>)</p>
          <BellLogo />
        </div>
        {notifications.map(({ title, text, image }, index) => (
          <div key={index} className='bg-white flex gap-[10px] items-center justify-between px-[15px] py-[10px] rounded-[15px] mt-[5px]'>
            <div className='min-w-6'>{image}</div>
            <div>
              <p>{title}</p>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>}
    </>
  )
}