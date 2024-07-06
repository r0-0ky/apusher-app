export interface UserTypes {
  balance: number
  avatar: string
}

export interface NavButtonsListTypes {
  value: string;
  path: string;
}

export interface NavBurgerButtonsListTypes {
  value: string;
  path: string;
  image: string;
  isClearImage?: boolean;
}

export interface navSelectsListTypes {
  value: string;
  path: string;
  image?: string;
  selected?: boolean;
}