//Lösung 2.4

import { FaPlusSquare } from "react-icons/fa";

import { useRef } from "react";

import { v4 as uuidv4 } from 'uuid';

const Input = ({ todos, setTodos }) => {
  const todoNameRef = useRef();

  const newTodoItem = () => {
    if (todoNameRef.current.value !== "") {
      setTodos([...todos, { 
        id: uuidv4(),
        text: todoNameRef.current.value,
        done: false
      }])
      todoNameRef.current.value = "";
    }
  }

  const handleAddClick = () => {
    newTodoItem();
  }

  const newTodoItemKeyPress = e => {
    if (e.keyCode === 13) {
      newTodoItem();
    }  
  }

  return (
    <div className="input">
      <div>
        <input ref={todoNameRef} onKeyDown={newTodoItemKeyPress} />
      </div>
      <div>
        <FaPlusSquare onClick={handleAddClick} />
      </div>
    </div>
  );
}

export default Input;
