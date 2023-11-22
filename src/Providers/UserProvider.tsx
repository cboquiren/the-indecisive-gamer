import { TUser } from "../Types";
import { Dispatch, ReactNode, SetStateAction, createContext, useState, useContext } from "react";

type TUserContext = {
  user: TUser | null;
  setUser: Dispatch<SetStateAction<TUser | null>>;
};

const UserContext = createContext<TUserContext | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Please use 'useUser' hook within UserContext");
  }
  return context;
};
