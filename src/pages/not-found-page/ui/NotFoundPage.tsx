import { Link } from "react-router-dom"

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-2xl">Страница не найдена</p>
      <Link to={'/knowledges'} className="text-xl text-[#006DF0]">База знаний</Link>
    </div>
  )
}