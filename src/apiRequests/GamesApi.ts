import toast from "react-hot-toast"

const games_URL = 'http://localhost:3000/games'

const getAllGames = () => {
  return fetch(games_URL).then((response) => {
    if (!response.ok) {
      toast.error('All our games are in the wrong case, please try again in a moment');
      throw new Error('Could not reach the server');
    }
    return response.json();
  })
}


export const gamesRequests = {
  getAllGames
}