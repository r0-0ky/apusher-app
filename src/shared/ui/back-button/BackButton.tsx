import { Link } from "react-router-dom"

export const BackButton: React.FC = () => {
  return (
    <Link to={'/knowledges'} className="bg-[#f7f9fb] inline-block bg-back-arrow bg-no-repeat bg-center w-[67px] h-[67px] rounded-full"></Link>
  )
}