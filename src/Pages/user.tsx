import { CreateUser } from "../Components/CreateUser";
import { Login } from "../Components/Login";

export const UserPage = () => {
  return (
    <div>
      <h1>User Page</h1>
      <Login />
      <CreateUser />
    </div>
  );
};
