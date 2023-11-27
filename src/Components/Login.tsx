import { useUser } from "../Providers/UserProvider";
import { UserForm } from "./UserForm";

export const Login = () => {
  const { userLogin } = useUser();

  return <UserForm label="Login" button="Login" action={userLogin} />;
};
