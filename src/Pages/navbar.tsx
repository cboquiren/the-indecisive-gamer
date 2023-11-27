import { CreateUser } from "../Components/CreateUser";
import { Login } from "../Components/Login";
import { useGames } from "../Providers/GamesProvider";
import { useUser } from "../Providers/UserProvider";

export const Navbar = () => {
  const { user, userLogout } = useUser();
  const { allGames } = useGames();

  console.log(allGames);

  return (
    <div>
      <h1>This is the Navbar Component</h1>
      <button onClick={() => userLogout()}>Logout</button>
      <p>{user?.username}</p>
      <p>{user?.password}</p>
      <Login />
      <CreateUser />
    </div>
  );
};
