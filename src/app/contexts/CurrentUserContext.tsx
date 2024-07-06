import React from "react";
import { UserTypes } from "./types";

  const currentUser = {
    balance: 0,
    avatar: '',
  };

export const CurrentUserContext = React.createContext<UserTypes>(currentUser);