import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { TIBooleans, TInteraction } from "../Types";
import { interactionsRequests } from "../apiRequests/InteractionApi";
import { useEffect } from "react";
import { useUser } from "./UserProvider";
import toast from "react-hot-toast";

type TInteractionContext = {
  allInteractions: TInteraction[];
  setAllInteractions: Dispatch<SetStateAction<TInteraction[]>>;
  userInteractions: TInteraction[];
  newUserInteraction: (data: TInteraction) => Promise<TInteraction>;
  alterUserInteraction: (interaction: TInteraction, newData: TIBooleans) => Promise<TInteraction>;
};

const InteractionContext = createContext<TInteractionContext | undefined>(undefined);

export const InteractionProvider = ({ children }: { children: ReactNode }) => {
  const [allInteractions, setAllInteractions] = useState<TInteraction[]>([]);

  const { user } = useUser();

  const refetchInteractions = () => {
    return interactionsRequests.getAllInteractions().then(setAllInteractions);
  };

  useEffect(() => {
    refetchInteractions();
  }, [user]);

  const userInteractions = allInteractions.filter((interaction) => {
    if (user) {
      return user.id === interaction.userId;
    }
  });

  const alterUserInteraction = (interaction: TInteraction, newData: TIBooleans) => {
    if (!user) {
      toast.error("Please log in");
      throw new Error("No user found");
    }
    return interactionsRequests
      .patchInteraction(interaction, newData)
      .then((interaction: TInteraction) => {
        switch (interaction.type) {
          case "favorite":
            toast.success(`${interaction.isFavorite ? "Added to" : "Removed from"} favorite games`);
            break;
          case "played":
            toast.success(
              `${interaction.hasPlayed ? "Added to" : "Removed from"} previously played games`
            );
            break;
          case "owned":
            toast.success(`${interaction.isOwned ? "Added to" : "Removed from"} owned games`);
            break;
          case "hidden":
            toast.success(`This game will now be ${interaction.isHidden ? "hidden" : "shown"}`);
        }
        refetchInteractions();
        return interaction;
      });
  };

  const newUserInteraction = (data: TInteraction) => {
    if (!user) {
      toast.error("Please log in");
      throw new Error("No user found");
    }
    return interactionsRequests.newInteraction(data).then((interaction: TInteraction) => {
      switch (interaction.type) {
        case "favorite":
          toast.success("Added to favorite games");
          break;
        case "played":
          toast.success("Added to previously played games");
          break;
        case "owned":
          toast.success("Added to owned games");
          break;
        case "hidden":
          toast.success("This game will now be hidden");
          break;
      }
      refetchInteractions();
      return interaction;
    });
  };

  return (
    <InteractionContext.Provider
      value={{
        allInteractions,
        setAllInteractions,
        userInteractions,
        newUserInteraction,
        alterUserInteraction,
      }}
    >
      {children}
    </InteractionContext.Provider>
  );
};

export const useInteractions = () => {
  const context = useContext(InteractionContext);
  if (!context) {
    throw new Error("Please use 'useInteraction' hook within InteractionContext");
  }
  return context;
};
