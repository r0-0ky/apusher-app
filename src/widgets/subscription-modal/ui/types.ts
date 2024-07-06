export interface SubscriptionModalProps {
  isHidden: boolean
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  text: string
  price: string
  days: number
  list: string[]
  tags: {
    image: string
    value: string
  }[]
}

export interface UserTypes {
  balance: number
  avatar: string
}