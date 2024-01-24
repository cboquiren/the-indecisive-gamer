import { useNavigate } from "react-router";
import { useUser } from "../Providers/UserProvider";

export const Navbar = () => {
  const { user, userLogout } = useUser();

  const navigate = useNavigate();

  return (
    <div id="navbar">
      <div className="user-section">
        {user && (
          <div>
            <p>{`Welcome ${user.username}!`}</p>
          </div>
        )}
        {user && <button onClick={() => userLogout()}>Logout</button>}
        {!user && <button onClick={() => navigate("userPage")}>Login</button>}
      </div>
      <div onClick={() => navigate("home")}>
        <h1>The indecisive Gamer</h1>
      </div>
    </div>
  );
};
