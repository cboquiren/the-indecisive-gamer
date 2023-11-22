import toast from "react-hot-toast/headless";

const user_URL = 'http://localhost:3000/users';

const getAllUsers = () => {
  return fetch(user_URL).then((response) => {
    if (!response.ok) {
      toast.error("We're sorry, we can't reach our server");
    }
    return response.json()
  })
}








export const userRequests = {
  getAllUsers
}