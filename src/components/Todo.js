//Lösung 2.4

import { FaRegTrashAlt, FaRegCheckSquare } from "react-icons/fa";

const Todo = ({title, todos, setTodos, todoId, done}) => {

    const toggleTodo = () => {
        setTodos(
            todos.map(
                e => { if (e.id === todoId) e.done =!e.done; return e }
            )
        );
        console.log(toggleTodo);
    }

    const deleteTodo = id => {
        setTodos(todos.filter(e => e.id !== todoId))
    }

  return (
    // <div className="todoUndone">
    <div className={ done === true ? "todoDone" : "todoUndone" }>
      {title} <FaRegCheckSquare onClick={toggleTodo} /> <FaRegTrashAlt onClick={deleteTodo} />
    </div>
  );
}

export default Todo;