import { TGame, TITypes } from "../Types";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { useUser } from "./UserProvider";
import { useInteractions } from "./InteractionsProvider";
import { gamesRequests } from "../apiRequests/GamesApi";

type TGamesContext = {
  allGamesRaw: TGame[];
  setAllGamesRaw: Dispatch<SetStateAction<TGame[]>>;
  selectedGame: TGame;
  setSelectedGame: Dispatch<SetStateAction<TGame>>;
  allGames: TGame[];
  userCategories: { [key: string]: number[] };
};

const GamesContext = createContext<TGamesContext | undefined>(undefined);

export const GamesProvider = ({ children }: { children: ReactNode }) => {
  const [allGamesRaw, setAllGamesRaw] = useState<TGame[]>([]);
  const [selectedGame, setSelectedGame] = useState<TGame>({} as TGame);

  const { user } = useUser();
  const { userInteractions } = useInteractions();

  const allGames = allGamesRaw.map((game) => {
    const allGenres: string[] = [];
    const allPlatforms: string[] = [];
    for (let i = 0; i < 5; i++) {
      const genre = `genre-${i}`;
      if (genre in game) {
        allGenres.push(game[genre]);
      }
      const platform: string = `platform-${i}`;
      if (platform in game) {
        allPlatforms.push(game[platform]);
      }
    }
    return { ...game, allGenres: allGenres, allPlatforms: allPlatforms };
  });

  const getAllGames = () => {
    return gamesRequests.getAllGames().then(setAllGamesRaw);
  };

  useEffect(() => {
    getAllGames();
  }, []);

  const sortUserGamesByType = (type: TITypes) => {
    if (!user) {
      return [];
    }
    return userInteractions
      .filter((interaction) => interaction.type === type)
      .map((interaction) => interaction.gameId);
  };

  const userCategories = {
    hiddenGamesArr: sortUserGamesByType("hidden"),
    favoriteGamesArr: sortUserGamesByType("favorite"),
    ownedGamesArr: sortUserGamesByType("owned"),
    playedGamesArr: sortUserGamesByType("played"),
  };

  return (
    <GamesContext.Provider
      value={{
        allGamesRaw,
        setAllGamesRaw,
        selectedGame,
        setSelectedGame,
        allGames,
        userCategories,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => {
  const context = useContext(GamesContext);
  if (!context) {
    throw new Error("Please use 'useGames' hook within GamesContext");
  }
  return context;
};
