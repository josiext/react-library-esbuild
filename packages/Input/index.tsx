import React from "react";

export function Input({ label }: { label: string }) {
  return (
    <label>
      {label}
      <input />
    </label>
  );
}
