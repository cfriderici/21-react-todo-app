//CONTEXT-Funktonen von react importieren 
import { createContext, useContext } from "react";

//CUSTOM-HOOK importieren
import useTodos from '../hooks/useTodos';

//CONTEXT erstellen
const TodoAppContext = createContext();

//HOOK-FUNCTION (das ist unser CUSTOM-HOOK)
const useTodoAppContext = () => useContext(TodoAppContext)

//CONTEXT-PROVIDER schreiben
//CUSTOM-HOOCK deklarieren --> alle props für die Komponenten 
const TodoAppContextProvider = ({ children }) => {
    const [todos, setTodos, addTodo, deleteTodo, toggleTodo] = useTodos();

    return (
        <TodoAppContext.Provider value={{ todos, setTodos, addTodo, deleteTodo, toggleTodo }} >
            {children}
        </TodoAppContext.Provider>
    )
}

export { TodoAppContextProvider, useTodoAppContext }