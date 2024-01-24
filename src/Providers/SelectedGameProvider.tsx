import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { TGame } from "../Types";

type TSelectedGameContext = {
  selectedGame: TGame | undefined;
  setSelectedGame: Dispatch<SetStateAction<TGame | undefined>>;
};

const SelectedGameContext = createContext<TSelectedGameContext | undefined>(undefined);

export const SelectedGameProvider = ({ children }: { children: ReactNode }) => {
  const [selectedGame, setSelectedGame] = useState<TGame | undefined>(undefined);

  return (
    <SelectedGameContext.Provider value={{ selectedGame, setSelectedGame }}>
      {children}
    </SelectedGameContext.Provider>
  );
};

export const useSelectedGame = () => {
  const context = useContext(SelectedGameContext);
  if (!context) {
    throw new Error("Please use 'useSelectedGame' hook within SelectedGameContext");
  }
  return context;
};
