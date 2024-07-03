import React from "react";
import { NavButton } from "../../../shared/ui/nav-button";
import { HeaderProps } from "./types";
import { Link } from "react-router-dom";
import { NavSelect } from "../../../shared/ui/nav-select";
import { BalanceButton } from '../../../shared/ui/balance-button';
import { NotificationsButton } from "../../../shared/ui/notifications-button";
import { ProfileButton } from '../../../shared/ui/profile-button/ProfileButton';
import avatar from '../../../shared/images/for-profile-button/avatar.jpg';
import { BurgerButton } from "../../../shared/ui/burger-button";

export const Header: React.FC<HeaderProps> = ({ navButtonsList, navSelectsList, notifications }) => {
  return (
    <header className="flex px-[15px] pb-[10px] pt-[6px] lg:px-0 lg:py-[15px] bg-[#F7F9FB] lg:bg-inherit border-b-2 border-[#ECEEF1] lg:border-none xl:pt-[35px] xl:pb-[28px] justify-between items-center">
      <div className="flex items-center gap-[5px] lg:gap-[20px] xl:gap-[30px]">
        <div className="xl:hidden">
          <BurgerButton />
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
        <BalanceButton value='30.25' />
        <NotificationsButton notifications={notifications} />
        <div className="hidden lg:block">
          <ProfileButton image={avatar} />
        </div>
      </div>
    </header>
  )
};