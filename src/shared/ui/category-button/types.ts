export interface CategoryButtonProps {
  image?: string
  value: string
  id: number
  selectedCategoryId: number
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<number>>
}