export interface NotificationMenuProps {
  notifications: notificationsTypes[]
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>
  isHidden: boolean
}

interface notificationsTypes {
  id: number
  title: string
  text: string
  image: JSX.Element
}