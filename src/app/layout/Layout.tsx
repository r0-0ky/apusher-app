import React from "react";
import { Header } from "../../widgets/header";
import { NavButtonsListTypes, navSelectsListTypes } from "./types";
import { Outlet } from "react-router-dom";
import walletIcon from "../../shared/images/for-nav-select/wallet.svg";
import pigIcon from "../../shared/images/for-nav-select/pig.svg";
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
      title: 'Аккаунт зарегистрирован!',
      text: 'Вы успешно зарегистрировались в Apusher! Добавьте социальные сети и приступайте к рекламе.',
      image: <AdminCheckLogo />,
    },
    {
      title: 'Ваш заказ прошел проверку!',
      text: 'Рекламная Кампания с HDRT Corporation успешно прошла проверку. Теперь вы зарабатываете на просмотрах.',
      image: <FastCheckLogo />,
    }
  ])

  return (
    <div className="bg-[#EFF2F7] h-full">
      <div className="h-full flex flex-col max-w-[1628px] box-content mx-auto lg:px-[50px]">
        <Header notifications={notifications} navButtonsList={navButtons} navSelectsList={navSelects} />
        <Outlet />
      </div>
    </div>
  )
};