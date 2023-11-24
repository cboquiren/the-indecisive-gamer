import { ComponentProps } from "react";
import { Transform } from "../Transformations";

export const FormInputContainer = ({
  label,
  inputProps,
}: {
  label: string;
  inputProps: ComponentProps<"input">;
}) => {
  return (
    <div className={`${label}-container`}>
      <label htmlFor="">{Transform.capitalize(label)}:</label>
      <input type="text" {...inputProps} />
    </div>
  );
};
