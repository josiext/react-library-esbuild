import React from "react";

export interface InputProps {
  label?: string;
}

export const Input = ({ label }: InputProps) => {
  return (
    <label>
      {label}
      <input />
    </label>
  );
};
