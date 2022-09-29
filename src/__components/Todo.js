// FontAwesome einbinden
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSquare} from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";


//useRef-Hook für Datenabfrage einfügen
import { useRef, useState } from "react";



// state hook muss hier auch definiert werden
const Todo = ({title, todos, setTodos}) => {

    // den Hoock in einer const definieren
    const todoDeleteRef = useRef();
    const todoUndoneRef = useRef();
    const todoDoneRef = useRef();



    // onKlick-Funktion definieren --> sie muss im selben element wie der useRef sein
    const handleUndoneClick = () => {
        console.log(todoUndoneRef.current.children[0]);
        // console.log(todoDeleteRef.current);
    }
    const handleDoneClick = () => {
        console.log(todoDoneRef.current.children[0]);
    }
    const handleDeleteClick = () => {
        console.log(todoDeleteRef.current.children[0]);
    }


    

    return (
        <div className="todo">
            {title} 
            <div className="img-wrapper"  >
                <span className="undone" ref={todoUndoneRef}><FaRegSquare className="todo-undone" onClick={handleUndoneClick}/></span>
                <span className="done" ref={todoDoneRef}><FaRegCheckSquare className="todo-done" onClick={handleDoneClick}/></span>
                <span className="delete>"  ref={todoDeleteRef}><FaRegTrashAlt className="input-delete" onClick={handleDeleteClick}/></span>
            </div> 
        </div>
    );
}

export default Todo;