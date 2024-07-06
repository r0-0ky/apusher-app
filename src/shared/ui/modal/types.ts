export interface ModalProps {
  children: React.ReactNode
  width?: string
  height?: string
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>
  isHidden: boolean
}