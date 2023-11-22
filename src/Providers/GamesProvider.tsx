import { TGame } from "../Types";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

type TGamesContext = {
  allGames: TGame[];
  setAllGames: Dispatch<SetStateAction<TGame[]>>;
  selectedGame: TGame;
  setSelectedGame: Dispatch<SetStateAction<TGame>>;
};

const GamesContext = createContext<TGamesContext | undefined>(undefined);

export const GamesProvider = ({ children }: { children: ReactNode }) => {
  const [allGames, setAllGames] = useState<TGame[]>([]);
  const [selectedGame, setSelectedGame] = useState<TGame>({} as TGame);

  return (
    <GamesContext.Provider value={{ allGames, setAllGames, selectedGame, setSelectedGame }}>
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => {
  const context = useContext(GamesContext);
  if (!context) {
    throw new Error("Please use 'useGames' hook within GamesContext");
  }
};
