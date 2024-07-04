export interface HeaderProps {
  navBurgerList: {
    value: string;
    path: string;
    image: string;
    isClearImage?: boolean
  }[]
  navButtonsList: {
    value: string;
    path: string;
  }[]
  navSelectsList: {
    value: string;
    path: string;
  }[][]
  notifications: {
    id: number
    title: string
    text: string
    image: JSX.Element
  }[]
  isMenuHidden: boolean
  setIsMenuHidden: React.Dispatch<React.SetStateAction<boolean>>
  isNotificationsHidden: boolean
  setIsNotificationsHidden: React.Dispatch<React.SetStateAction<boolean>>
}