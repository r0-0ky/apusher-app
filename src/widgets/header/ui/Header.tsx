import React from "react";
import { NavButton } from "../../../shared/ui/nav-button";
import { UserTypes } from "./types";
import { Link } from "react-router-dom";
import { NavSelect } from "../../../shared/ui/nav-select";
import { BalanceButton } from '../../../shared/ui/balance-button';
import bellIcon from '../../../app/assets/icons/bell.svg';
import addCircle from '../../../app/assets/icons/add_circle.svg';
import { BurgerButton } from "../../../shared/ui/burger-button";
import { BurgerMenu } from "../../../shared/ui/burger-menu";
import { IconCircleLink } from "../../../shared/ui/icon-circle-link";
import { IconCircleButton } from "../../../shared/ui/icon-circle-button";
import { NotificationMenu } from "../../../shared/ui/notification-menu";
import { CurrentUserContext } from "../../../app/contexts/CurrentUserContext";
import { NavBurgerButtonsListTypes, NavButtonsListTypes, navSelectsListTypes } from "./types";
import walletIcon from "../../../app/assets/icons/wallet.svg";
import pigIcon from "../../../app/assets/icons/pig.svg";
import subscriptionsIcon from "../../../app/assets/icons/subscriptions.svg";
import listIcon from "../../../app/assets/icons/list_alt.svg";
import menuBookIcon from "../../../app/assets/icons/menu_book.svg";
import AdminCheckIcon from "../../../app/assets/icons/user_check.svg?react";
import FastCheckIcon from "../../../app/assets/icons/fact_check.svg?react";


export const Header: React.FC = () => {
  const user = React.useContext<UserTypes>(CurrentUserContext); 

  const [navButtonsList] = React.useState<NavButtonsListTypes[]>([
      {
        value: 'Личная страница',
        path: '/profile',
      },
      {
        value: 'Подписки',
        path: '/subscriptions',
      },
      {
        value: 'Выполнить Заказ',
        path: '/complete-order',
      },
      {
        value: 'База Знаний',
        path: '/knowledges',
      },
    ]
  );

  const [navBurgerList] = React.useState<NavBurgerButtonsListTypes[]>([
    {
      value: 'Личная страница',
      path: '/profile',
      image: user.avatar,
      isClearImage: true,
    },
    {
      value: 'Подписки',
      path: '/subscriptions',
      image: subscriptionsIcon,
    },
    {
      value: 'Выполнить Заказ',
      path: '/complete-order',
      image: listIcon,
    },
    {
      value: 'База Знаний',
      path: '/knowledges',
      image: menuBookIcon,
    },
    {
      value: 'Финансы',
      path: '/finance',
      image: walletIcon,
    },
    {
      value: 'Реферальная система',
      path: '/referral-system',
      image: pigIcon,
    },
  ]
  );

  const [navSelectsList] = React.useState<navSelectsListTypes[][]>([
      [
        {
          value: 'Финансы',
          path: '/finance',
          image: walletIcon,
          selected: true,
        },
        {
          value: 'Реферальная система',
          path: '/referral-system',
          image: pigIcon,
        },
      ]
    ]
  );

  const [notifications] = React.useState([
    {
      id: 1,
      title: 'Аккаунт зарегистрирован!',
      text: 'Вы успешно зарегистрировались в Apusher! Добавьте социальные сети и приступайте к рекламе.',
      image: <AdminCheckIcon />,
    },
    {
      id: 2,
      title: 'Ваш заказ прошел проверку!',
      text: 'Рекламная Кампания с HDRT Corporation успешно прошла проверку. Теперь вы зарабатываете на просмотрах.',
      image: <FastCheckIcon />,
    }
  ])

  const [isNotificationsHidden, setIsNotificationsHidden] = React.useState(true);
  const [isMenuHidden, setIsMenuHidden] = React.useState(true);

  const handleToggleBurgerMenu = () => {
    setIsMenuHidden(!isMenuHidden)
  }
  const handleToggleNotificationMenu = () => {
    setIsNotificationsHidden(!isNotificationsHidden)
  }

  return (
    <>
      <header className="flex px-[15px] pb-[8px] pt-[8px] lg:px-0 lg:pb-[15px] lg:pt-[13px] bg-[#F7F9FB] lg:bg-inherit border-b-2 border-[#ECEEF1] lg:border-none xl:pt-[32px] xl:pb-[28px] justify-between items-center">
        <div className="flex items-center gap-[5px] lg:gap-[20px] xl:gap-[30px]">
          <div className="xl:hidden">
            <BurgerButton handleClick={handleToggleBurgerMenu} />
          </div>
          <Link to="/" className="font-semibold text-[20px] lg:text-[24px] xl:text-[32px]">Apusher</Link>
          <nav className="items-center gap-[5px] hidden xl:flex">
            {navButtonsList.map((button, index) => (
              <NavButton key={index} {...button} />
            ))}
            {navSelectsList.map((select, index) => (
              <NavSelect key={index} selectsArr={select} />
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-[5px]">
          <div className="hidden sm:block xl:hidden">
            <IconCircleLink image={addCircle} path="/" />
          </div>
          <BalanceButton value={user.balance} />
          <div>
            <IconCircleButton image={bellIcon} handleClick={handleToggleNotificationMenu} />
            <NotificationMenu notifications={notifications} isHidden={isNotificationsHidden} setIsHidden={setIsNotificationsHidden} />
          </div>
          <div className="hidden lg:block">
          <Link to="/#" className="lg:bg-[#f7f9fb] bg-white hover:border-[1px] hover:border-[#ECEEF1] hover:bg-white transition-all w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] xl:w-[67px] xl:h-[67px] rounded-full flex items-center justify-center">
            <div className='bg-center bg-no-repeat w-[43px] h-[43px] xl:w-[44px] bg-cover xl:h-[44px] rounded-full' style={{ backgroundImage: `url('${user.avatar}')`}}></div>
          </Link>
          </div>
        </div>
      </header>
      <BurgerMenu navBurgerList={navBurgerList} isHidden={isMenuHidden} setIsHidden={setIsMenuHidden} />
    </>
  )
};
