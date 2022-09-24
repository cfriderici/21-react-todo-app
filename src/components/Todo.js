// FontAwesome einbinden
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSquare} from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";


//useRef-Hook für Datenabfrage einfügen
import { useRef } from "react";



const Todo = ({title}) => {

    // den Hoock in einer const definieren
    const todoDeleteRef = useRef();

    // onKlick-Funktion definieren --> sie muss im selben element wie der useRef sein
    const handleDeleteClick = () => {
        console.log(todoDeleteRef.current.children[2]);
    }
    

    return (
        <div className="todo">
            {title} 
            <div className="img-wrapper" ref={todoDeleteRef}>
                <FaRegSquare className="todo-undone" />
                <FaRegCheckSquare className="todo-done" />
                <FaRegTrashAlt className="input-delete" onClick={handleDeleteClick} />
            </div> 
        </div>
    );
}

export default Todo;