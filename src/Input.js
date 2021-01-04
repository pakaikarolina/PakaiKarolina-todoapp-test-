import React, { useState } from "react";

export default function Input({ onChange, onItemAdded }) {
  const [item, setItem] = useState("");

  const add = () => {
    onChange(item);
    setItem("");
    onItemAdded()
  };



  return (
    <div className="container">
      <div className="">
        <input
          onChange={event => setItem({ text: event.target.value })}
          type="text"
          placeholder="write to do here"
        />
        <button type="submit" onClick={add}>Add</button>
      </div>
    </div>
  );
}
