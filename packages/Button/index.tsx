/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import {
  Button as ButtonThemeUI,
  ButtonProps as ButtonPropsThemeUI,
} from "theme-ui";

export interface ButtonProps extends ButtonPropsThemeUI {
  variant?: "primary" | "secondary";
}

export const Button = ({ sx, variant = "primary", ...rest }: ButtonProps) => {
  return (
    <ButtonThemeUI
      sx={{
        display: "inline-block",
        backgroundColor: variant === "primary" ? "red" : "green",
        fontSize: "50px",
        cursor: "pointer",
        ...sx,
      }}
      {...rest}
    />
  );
};
