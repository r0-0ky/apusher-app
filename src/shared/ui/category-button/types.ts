export interface CategoryButtonProps {
  value: string
  id: number
  selectedCategory: number
  setSelectedCategory: React.Dispatch<React.SetStateAction<number>>
}