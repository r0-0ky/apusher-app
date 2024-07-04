import React from "react";
import { NavButton } from "../../../shared/ui/nav-button";
import { HeaderProps } from "./types";
import { Link } from "react-router-dom";
import { NavSelect } from "../../../shared/ui/nav-select";
import { BalanceButton } from '../../../shared/ui/balance-button';
import { NotificationsButton } from "../../../shared/ui/notifications-button";
import avatar from '../../../app/assets/images/avatar.jpg';
import addCircle from '../../../app/assets/icons/add_circle.svg';
import { BurgerButton } from "../../../shared/ui/burger-button";
import { BurgerMenu } from "../../../shared/ui/burger-menu";
import { IconCircleLink } from "../../../shared/ui/icon-circle-link";


export const Header: React.FC<HeaderProps> = ({ isMenuHidden, isNotificationsHidden, setIsMenuHidden, setIsNotificationsHidden, navBurgerList, navButtonsList, navSelectsList, notifications }) => {

  const handleToggleMenu = () => {
    setIsMenuHidden(!isMenuHidden)
  }

  React.useEffect(() => {
    if (!isMenuHidden || !isNotificationsHidden) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuHidden, isNotificationsHidden])

  React.useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if(e.key === 'Escape') {
        setIsMenuHidden(true)
        setIsNotificationsHidden(true)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <>
      <header className="flex px-[15px] pb-[10px] pt-[6px] lg:px-0 lg:py-[15px] bg-[#F7F9FB] lg:bg-inherit border-b-2 border-[#ECEEF1] lg:border-none xl:pt-[35px] xl:pb-[28px] justify-between items-center">
        <div className="flex items-center gap-[5px] lg:gap-[20px] xl:gap-[30px]">
          <div className="xl:hidden">
            <BurgerButton handleClick={handleToggleMenu} />
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
          <div>
            <IconCircleLink image={addCircle} path="/#" />
          </div>
          <BalanceButton value='30.25' />
          <NotificationsButton notifications={notifications} setIsHidden={setIsNotificationsHidden} isHidden={isNotificationsHidden} />
          <div className="hidden lg:block">
            <IconCircleLink path="/#" image={avatar} />
          </div>
        </div>
      </header>
      <BurgerMenu navBurgerList={navBurgerList} isHidden={isMenuHidden} setIsHidden={setIsMenuHidden} />
    </>
  )
};