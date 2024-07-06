export interface SubscribtionCardProps {
  title: string
  endDate: string
  isActive: boolean
  icon: string
  procentRemain: number
  handleCreateSubscription: (data: ModalDataTypes) => void
  category: {
    value: string
    image: string
    id: number
  }
}

interface ModalDataTypes {
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