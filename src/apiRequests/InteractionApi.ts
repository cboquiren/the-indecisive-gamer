import toast from "react-hot-toast";
import { TIBooleans, TInteraction } from "../Types";

const interactions_URL = 'http://localhost:3000/interactions';

const getAllInteractions = () => {
  return fetch(interactions_URL).then((response) => {
    if (!response.ok) {
      toast.error('Our server took a bathroom break');
      throw new Error('Could not reach the server');
    }
    return response.json();
  })
};

const newInteraction = (data: TInteraction) => {
  return fetch(interactions_URL,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then((response) => {
    if (!response.ok) {
      toast.error('Our server needed a snack');
      throw new Error('Could not reach the server');
    }
    return response.json();
  })
};

const patchInteraction = (interaction: TInteraction, newData: TIBooleans) => {
  return fetch(`${interactions_URL}/${interaction.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newData)
  }).then((response) => {
    if (!response.ok) {
      toast.error(`Our server went to stretch its legs`);
      throw new Error('Could not reach the server');
    }
    return response.json();
  })
}





export const interactionsRequests = {
  getAllInteractions,
  newInteraction,
  patchInteraction
}