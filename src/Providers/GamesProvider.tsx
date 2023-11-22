import { TGame } from "../Types";
import { Dispatch, SetStateAction } from "react";

type TGamesContext = {
  allGames: TGame[];
  setAllGames: Dispatch<SetStateAction<TGame[]>>;
};
