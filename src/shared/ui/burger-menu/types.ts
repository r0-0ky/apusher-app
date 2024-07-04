export interface BurgerMenuProps {
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>
  navBurgerList: {
    value: string
    path: string
    image: string
    isClearImage?: boolean
  }[]
  isHidden: boolean
}