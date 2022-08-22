/** @jsxImportSource theme-ui */

import { Button as ButtonThemeUI, ThemeUIStyleObject } from "theme-ui";

export interface ButtonProps {
  sx?: ThemeUIStyleObject | undefined;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({
  children,
  sx,
  variant = "primary",
}: ButtonProps) {
  return (
    <ButtonThemeUI
      sx={{
        display: "inline-block",
        backgroundColor: variant === "primary" ? "red" : "green",
        fontSize: "50px",
        cursor: "pointer",
        ...sx,
      }}
    >
      {children}
    </ButtonThemeUI>
  );
}
