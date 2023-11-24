import toast from "react-hot-toast";
import { TUser } from "../Types";

const user_URL = 'http://localhost:3000/users';

const findUser = (user: Omit<TUser,'id'>) => {
  return fetch(user_URL).then((response) => {
    if (!response.ok) {
      toast.error("Sorry, our server seems to be afk");
      throw new Error("Could not reach the server")
    }
    return response.json();
  }).then((response: TUser[]) => {
    const findUsername = response.filter((knownUser) => knownUser.username === user.username);
    if (findUsername.length === 0) {
      toast.error("User Not Found!");
      throw new Error("User Not Found!");
    }
    return findUsername
  }).then((knownUsers) => {
    const checkPassword = knownUsers.find((knownUser) => knownUser.password === user.password);
    if (!checkPassword) {
      toast.error("Username and Password Do Not Match")
      throw new Error("Username and Password do not match");
    }
    return checkPassword;
  })
}

const createUser = (user: Omit<TUser,'id'>) => {
  return fetch(user_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then((response) => {
    if (!response.ok) {
      toast.error("Our server went to touch some grass");
      throw new Error("Could not reach the server")
    }
    return response.json();
  })
}






export const userRequests = {
  findUser,
  createUser
}