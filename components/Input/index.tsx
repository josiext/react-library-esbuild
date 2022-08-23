import React from "react";
import { tw } from "twind";

export interface InputProps {
  label?: string;
}

export const Input = ({ label }: InputProps) => {
  return (
    <label className={tw`bg-purple-400`}>
      {label}
      <input />
    </label>
  );
};
