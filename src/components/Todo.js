// FontAwesome einbinden
import { FaRegSquare, FaRegCheckSquare, FaRegTrashAlt } from "react-icons/fa";


// ----------------------------------------------------------------------  //


// TODO-OBJEKT/ELEMENT definieren
//Alle properties, die ich in App.js den jeweilgen Komponenten übergebe, der enntsprechenden const zuweisen
const Todo = ({todoTitle, todoId, todoDone, todos, setTodos}) => {


    const handelToggleClick = () => {
        setTodos(
            todos.map(
                e => {
                    if (e.id === todoId) e.done =!e.done;
                    return e
                }
            )
        );
    }
    
    // FUNKTION 
    // die Klick-Funktion erhält einen Parameter (Id)    ?!?
    // die setter-Funktion durchläuft den state (todo) 
    // die Filter-Methode (filter) schreibt ein neues Array mit den Elementen (e) die NICHT die Id des aktuellen (geklickten) Elemeents hat 
    const handleDeleteClick = id => {
        // console.log(todoDeleteRef.current.children[0]);
        setTodos(todos.filter(e => e.id !== todoId))
    }


    return (
        <div className={ todoDone === true ? "todo todo-done" : "todo todo-undone" }>
            {todoTitle} 
            <div className="img-wrapper"  >
                <span className={ todoDone === true ? "img done" : "img undone" }> <FaRegSquare onClick={handelToggleClick} /> </span>
                <span className={ todoDone === true ? "img undone" : "img done" }> <FaRegCheckSquare onClick={handelToggleClick} /> </span>
                <span className="img"> <FaRegTrashAlt onClick={handleDeleteClick} /> </span>
            </div> 
        </div>
    );
}

export default Todo;