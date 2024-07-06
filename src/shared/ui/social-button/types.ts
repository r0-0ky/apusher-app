export interface SocialButtonProps {
  selectedCategoryId: number
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<number>>
  value: string
  image: string
  id: number
  disableImage: boolean
  isConnected: boolean
}