import React from "react"
import { NotificationMenuProps } from "./types"
import BellLogo from '../../../app/assets/icons/bell.svg?react';

export const NotificationMenu: React.FC<NotificationMenuProps> = ({ isHidden, setIsHidden, notifications }) => {
  const [filtredNotifications, setFiltredNotifications] = React.useState(notifications)

  const handleClick = () => {
    setIsHidden(!isHidden)
  }

  const handleDelete = (id: number) => {
    setFiltredNotifications(filtredNotifications.filter((notification) => notification.id !== id))
  }

  React.useEffect(() => {
    const resolution = document.documentElement.clientWidth;
    if (resolution < 768) {
      if (!isHidden) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [isHidden])

  return (
    <div className={`${isHidden ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-all ease-in-out fixed sm:absolute z-20 w-full h-full md:h-auto overflow-auto md:min-h-[200px] md:max-h-[300px] md:w-[497px] md:mt-[10px] lg:mt-[5px] flex flex-col md:items-center top-0 right-0 md:top-auto lg:right-[50px] border-[1px] border-[#ECEEF1] bg-[#F7F9FB] px-[15px] pb-[60px] pt-[20px] md:p-[10px] md:rounded-[20px]`}>
      <div className='flex items-center mb-[20px] md:mb-0 justify-between'>
        <div className='flex items-center lg:mb-[10px] gap-[5px]'>
          <p className='text-[16px] font-normal'>Ваши уведомления (<span className='text-[#EB5757]'>{filtredNotifications.length}</span>)</p>
          <div className='hidden md:block'>
            <BellLogo />
          </div>
        </div>
        <button onClick={handleClick} className="w-[14px] hover:opacity-70 transition-all md:hidden h-[14px] inline-block bg-close bg-center bg-no-repeat"></button>
      </div>
      {filtredNotifications.map(({ id, title, text, image }, index) => (
        <div key={index} className='bg-white relative flex gap-[10px] items-center justify-between pl-[15px] pr-[30px] py-[10px] rounded-[15px] mt-[5px]'>
          <div className='min-w-6'>{image}</div>
          <div>
            <p className='text-[14px] font-medium'>{title}</p>
            <p className='text-[14px] font-normal'>{text}</p>
          </div>
          <button onClick={() => handleDelete(id)} className='w-[20px] hover:opacity-70 transition-all h-[20px] bg-close bg-center bg-no-repeat bg-cover absolute top-[9px] right-[10px]'></button>
        </div>
      ))}
      {filtredNotifications.length === 0 && 
        <div className='flex-1 flex items-center justify-center'>
          <p className='text-[20px] text-center font-normal'>У вас нет уведомлений</p>
        </div>
      }
    </div>
  )
}