import toast from "react-hot-toast";
import { TUser } from "../Types";
import { FormInputContainer } from "./FormInput";
import { useState } from "react";

export const UserForm = ({
  label,
  button,
  action,
}: {
  label: string;
  button: string;
  action: (user: Omit<TUser, "id">) => Promise<TUser>;
}) => {
  const [usernameInput, setUsernameInput] = useState<string | null>(null);
  const [passwordInput, setPasswordInput] = useState<string | null>(null);

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
            action({ username: usernameInput, password: passwordInput })
              .then(() => reset())
              .catch(() => setPasswordInput(null));
          }
        }}
      >
        <h2>{label}</h2>
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
        <button type="submit">{button}</button>
      </form>
    </div>
  );
};
