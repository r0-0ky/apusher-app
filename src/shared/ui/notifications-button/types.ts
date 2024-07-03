export interface NotificationsButtonProps {
  notifications: notificationsTypes[]
}

interface notificationsTypes {
  title: string
  text: string
  image: JSX.Element
}