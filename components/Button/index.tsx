import React from "react";
import { tw } from "twind";

export interface InputProps extends React.ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
}

export const Button = (props: InputProps) => {
  return (
    <button className={tw`bg-blue-600 p-2 rounded text-white`} {...props} />
  );
};
