//lösung 2.4

import "./App.css";

import { useState } from "react";

import Todo from "./components/Todo";
import Input from "./components/Input";
import Headline from "./components/Headline";

import { v4 as uuidv4 } from 'uuid';

const todoArray = [
  {
    id: uuidv4(),
    text: "Kühlschrank saubermachen",
    done: false
  },
  {
    id: uuidv4(),
    text: "Steuererklärung",
    done: false
  },
  {
    id: uuidv4(),
    text: "Komponenten besser stylen",
    done: false
  },
  {
    id: uuidv4(),
    text: "Todos in Array speichern",
    done: false
  },
  {
    id: uuidv4(),
    text: "Todos über Array aufrufen und ausgeben",
    done: false
  }
]

function App() {
  const [todos, setTodos] = useState(todoArray);

  return (
    <div className="app">
      <Headline />

      <Input todos={todos} setTodos={setTodos} />

      {
        todos.map(e => (
          <Todo title={e.text} key={e.id} todos={todos} setTodos={setTodos} todoId={e.id} done={e.done} />
        ))
      }

    </div>
  );
}

export default App;
