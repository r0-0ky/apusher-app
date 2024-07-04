import React from "react";
import { Header } from "../../widgets/header";
import { NavBurgerButtonsListTypes, NavButtonsListTypes, navSelectsListTypes } from "./types";
import { Outlet } from "react-router-dom";
import walletIcon from "../assets/icons/wallet.svg";
import pigIcon from "../assets/icons/pig.svg";
import avatarIcon from "../assets/images/avatar.jpg";
import subscriptionsIcon from "../assets/icons/subscriptions.svg";
import listIcon from "../assets/icons/list_alt.svg";
import menuBookIcon from "../assets/icons/menu_book.svg";
import AdminCheckLogo from "../../shared/images/for-notifications-button/Group 186.svg?react";
import FastCheckLogo from "../../shared/images/for-notifications-button/fact_check_24dp_FILL0_wght400_GRAD0_opsz24 1.svg?react";

export const Layout: React.FC = () => {
  const [navButtons] = React.useState<NavButtonsListTypes[]>([
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

  const [navBurgerButtons] = React.useState<NavBurgerButtonsListTypes[]>([
    {
      value: 'Личная страница',
      path: '/profile',
      image: avatarIcon,
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

  const [navSelects] = React.useState<navSelectsListTypes[][]>([
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
      image: <AdminCheckLogo />,
    },
    {
      id: 2,
      title: 'Ваш заказ прошел проверку!',
      text: 'Рекламная Кампания с HDRT Corporation успешно прошла проверку. Теперь вы зарабатываете на просмотрах.',
      image: <FastCheckLogo />,
    }
  ])

  const [isNotificationsHidden, setIsNotificationsHidden] = React.useState(true);
  const [isMenuHidden, setIsMenuHidden] = React.useState(true);

  return (
    <div className="bg-[#EFF2F7] overflow-y-hidden h-full">
      <div className="h-full flex flex-col max-w-[1628px] box-content mx-auto lg:px-[50px]">
        <Header isMenuHidden={isMenuHidden} setIsMenuHidden={setIsMenuHidden} isNotificationsHidden={isNotificationsHidden} setIsNotificationsHidden={setIsNotificationsHidden} navBurgerList={navBurgerButtons} notifications={notifications} navButtonsList={navButtons} navSelectsList={navSelects} />
        <Outlet />
      </div>
    </div>
  )
};