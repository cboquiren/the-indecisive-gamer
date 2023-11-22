import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { TInteraction } from "../Types";

type TInteractionContext = {
  allInteractions: TInteraction[];
  setAllInteractions: Dispatch<SetStateAction<TInteraction[]>>;
};

const InteractionContext = createContext<TInteractionContext | undefined>(undefined);

export const InteractionProvider = ({ children }: { children: ReactNode }) => {
  const [allInteractions, setAllInteractions] = useState<TInteraction[]>([]);

  return (
    <InteractionContext.Provider value={{ allInteractions, setAllInteractions }}>
      {children}
    </InteractionContext.Provider>
  );
};

export const useInteractions = () => {
  const context = useContext(InteractionContext);
  if (!context) {
    throw new Error("Please use 'useInteraction' hook within InteractionContext");
  }
};
