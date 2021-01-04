import React from "react";

export default function Todo({ text, checked }) {
  return (
    <div>
      <input type="checkbox" checked={checked} />
      {text}
    </div>
  );
}
