export interface CategoryButtonProps {
  image?: string
  value: string
  id: number
  selectedCategory: number
  setSelectedCategory: React.Dispatch<React.SetStateAction<number>>
}