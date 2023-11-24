import { useState } from "react";
import { useUser } from "../Providers/UserProvider";
import toast from "react-hot-toast";
import { FormInputContainer } from "./FormInput";

export const Login = () => {
  const [usernameInput, setUsernameInput] = useState<string | null>(null);
  const [passwordInput, setPasswordInput] = useState<string | null>(null);

  const { userLogin } = useUser();

  const verified = usernameInput !== null && passwordInput !== null;

  const reset = () => {
    setPasswordInput(null);
    setUsernameInput(null);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!verified) {
            toast.error("Username and Password must be valid!");
            setPasswordInput(null);
          } else {
            userLogin({ username: usernameInput, password: passwordInput })
              .then(() => reset())
              .catch(() => setPasswordInput(null));
          }
        }}
      >
        <h2>Login</h2>
        <FormInputContainer
          label="username"
          inputProps={{
            value: usernameInput === null ? "" : usernameInput,
            onChange: (e) => setUsernameInput(e.target.value),
          }}
        />
        <FormInputContainer
          label="password"
          inputProps={{
            value: passwordInput === null ? "" : passwordInput,
            onChange: (e) => setPasswordInput(e.target.value),
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
