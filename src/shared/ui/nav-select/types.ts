export interface NavSelectProps {
  selectsArr: selectTypes[]
}

interface selectTypes {
  value: string;
  path: string;
  image?: string;
  selected?: boolean;
}