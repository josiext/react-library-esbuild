/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import {
  Button as ButtonThemeUI,
  ButtonProps as ButtonPropsThemeUI,
  ThemeUIStyleObject,
} from "theme-ui";

export interface ButtonProps extends Omit<ButtonPropsThemeUI, "css"> {
  css?: ThemeUIStyleObject | null;
  variant?: "primary" | "secondary";
}

export const Button = ({ css, variant = "primary", ...rest }: ButtonProps) => {
  return (
    <ButtonThemeUI
      sx={{
        display: "inline-block",
        backgroundColor: variant === "primary" ? "red" : "green",
        fontSize: "50px",
        cursor: "pointer",
        ...css,
      }}
      {...rest}
    />
  );
};
