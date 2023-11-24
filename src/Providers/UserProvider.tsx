import { TUser } from "../Types";
import { Dispatch, ReactNode, SetStateAction, createContext, useState, useContext } from "react";
import { userRequests } from "../apiRequests/UserApi";
import toast from "react-hot-toast";

type TUserContext = {
  user: TUser | null;
  setUser: Dispatch<SetStateAction<TUser | null>>;
  userLogin: (user: Omit<TUser, "id">) => Promise<TUser>;
  createUser: (user: Omit<TUser, "id">) => Promise<TUser>;
  userLogout: () => void;
};

const UserContext = createContext<TUserContext | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);

  const userLogin = (user: Omit<TUser, "id">) => {
    return userRequests.findUser(user).then((foundUser) => {
      setUser(foundUser);
      toast.success(`Welcome Back ${foundUser.username}!`);
      return foundUser;
    });
  };

  const createUser = (user: Omit<TUser, "id">) => {
    return userRequests.createUser(user).then((newUser: TUser) => {
      setUser(newUser);
      toast.success(`Welcome ${newUser.username}!`);
      return newUser;
    });
  };

  const userLogout = () => {
    setUser(null);
    toast.success("Successfully logged out!");
  };

  return (
    <UserContext.Provider value={{ user, setUser, userLogin, createUser, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Please use 'useUser' hook within UserContext");
  }
  return context;
};
