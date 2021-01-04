import React, { useState } from "react";
import "./style.css";
import Input from "./Input";
import Todolist from "./TodoList"

export default function App() {
  const [addItem, setAddItem] = useState();
  const [list, setList] = useState([]);

  return (
    <div>
      <h1>Todo App</h1>
      <Input
        value={addItem}
        onChange={setAddItem}
        onItemAdded={item =>
          setList(list => {
            list.push(item);
            return [...list];
          })
        }
      />
      <Todolist list={list}/>
    </div>
  );
}
