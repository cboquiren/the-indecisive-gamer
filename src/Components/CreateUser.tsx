import { useState } from "react";
import { useUser } from "../Providers/UserProvider";
import { FormInputContainer } from "./FormInput";

export const CreateUser = () => {
  const [usernameInput, setUsernameInput] = useState<string | null>(null);
  const [passwordInput, setPasswordInput] = useState<string | null>(null);

  const { createUser } = useUser();

  const reset = () => {
    setPasswordInput(null);
    setUsernameInput(null);
  };

  return (
    <div>
      <form>
        <h2>Create a New Account</h2>
        <FormInputContainer
          label="username"
          inputProps={{
            value: usernameInput === null ? "" : usernameInput,
            onChange: (e) => setUsernameInput(e.target.value),
          }}
        />
      </form>
    </div>
  );
};
