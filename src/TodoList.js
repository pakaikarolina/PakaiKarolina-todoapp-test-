import React from "react";
import Todo from "./Todo";

export default function Todolist({ list }) {
  return (
    <div className="row row-cols-4">
      {list.map(({ checked, text }) => (
        <Todo checked={checked} text={text} key={text} />
      ))}
    </div>
  );
}
