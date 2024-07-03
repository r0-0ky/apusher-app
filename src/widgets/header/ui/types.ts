export interface HeaderProps {
  navButtonsList: {
    value: string;
    path: string;
  }[]
  navSelectsList: {
    value: string;
    path: string;
  }[][]
  notifications: {
    title: string
    text: string
    image: JSX.Element
  }[]
}