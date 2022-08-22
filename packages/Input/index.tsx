import React from "react";

export default function Input({ label }: { label: string }) {
  return (
    <label>
      {label}
      <input />
    </label>
  );
}
