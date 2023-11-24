import { Login } from "../Components/Login";
import { useUser } from "../Providers/UserProvider";

export const Navbar = () => {
  const { user, userLogout } = useUser();
  return (
    <div>
      <h1>This is the Navbar Component</h1>
      <button onClick={() => userLogout()}>Logout</button>
      <p>{user?.username}</p>
      <p>{user?.password}</p>
      <Login />
    </div>
  );
};
