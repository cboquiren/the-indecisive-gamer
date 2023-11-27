import { useUser } from "../Providers/UserProvider";
import { UserForm } from "./UserForm";

export const CreateUser = () => {
  const { createUser } = useUser();

  return <UserForm label="Create a New Account" button="Create Account" action={createUser} />;
};
