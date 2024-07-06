import React from "react"
import { ModalProps } from "./types"

export const Modal: React.FC<ModalProps>= ({ children, width, height, setIsHidden, isHidden }) => {
  const [resolution, setResolution] = React.useState(0);
  const handleClose = () => {
    setIsHidden(true)
  }

  React.useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if(e.key === 'Escape') {
        setIsHidden(true)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])


  React.useEffect(() => {
    setResolution(document.documentElement.clientWidth)
    if (!isHidden) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isHidden])
  
  return (
    <div onClick={handleClose} className={`${isHidden ? "opacity-0 invisible" : " opacity-100 visible"} transition-all ease-in-out fixed z-50 top-0 bottom-0 bg-[#00000080] flex items-end md:items-center md:justify-center left-0 right-0`}>
      <div onClick={e => e.stopPropagation()} style={resolution > 768 ? {width, height} : {width: '100%', height: '71%'}} className={`${isHidden ? 'translate-y-[100%]' : 'translate-y-0'} transition-all bg-[#EFF2F7] rounded-b-none md:rounded-b-[30px] rounded-[30px] w-full p-[15px] md:p-[25px]`}>
        {children}
      </div>
    </div>
  )
}