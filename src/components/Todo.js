// FontAwesome einbinden
import { FaRegSquare, FaRegCheckSquare, FaRegTrashAlt } from "react-icons/fa";

// Styled Components einbinden
import styled from "styled-components";
import StyledImgWrapper from "./StyledImgWrapper";



// ----------------------------------------------------------------------  //


// TODO-OBJEKT/ELEMENT definieren
//Alle properties, die ich in App.js den jeweilgen Komponenten übergebe, der enntsprechenden const zuweisen
const Todo = ({todoTitle, todoId, todoDone, todos, setTodos}) => {

    //die SETTER-FUNCTION (setTodo) itteriert mit der .map-Methode durch das Array des STATE (todos)
    //Bei dem Element (e) des Arrays, bei welchem die id die selbe ist, wie die des aktuell geklicktenn Objekts,
    //soll der Wert des properties(?) done von false auf true oder anders herum geändert werden 
    // 
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
    // die Filter-Methode (filter) schreibt ein neues Array mit den Elementen (e) die NICHT die Id des aktuellen (geklickten) Elements hat 
    const handleDeleteClick = id => {
        // console.log(todoDeleteRef.current.children[0]);
        setTodos(todos.filter(e => e.id !== todoId))
    }


    return (
        // <div className={ todoDone === true ? "todo todo-done" : "todo todo-undone" }>
        <StyledTodo done={todoDone}>
            {todoTitle} 
            <StyledImgWrapper>
                <FaRegSquare className="square" onClick={handelToggleClick} /> 
                <FaRegCheckSquare className="check" onClick={handelToggleClick} /> 
                <FaRegTrashAlt className="trash" onClick={handleDeleteClick} /> 
            </StyledImgWrapper> 
        </StyledTodo>
    );
}

export default Todo;


// ------ STYLED COMPONENTS ------  //

const StyledTodo = styled.div`
    /* background-color: rgba(250, 250, 0, 0.4); */
    background-color: white;
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    border-radius: 4px;
    box-shadow: 1px 1px 4px gray;
    padding: 4px;
    color: ${props => props.done ? "gray" : "black"};
    text-decoration: ${props => props.done ? "line-through" : "none"};

    &:last-of-type {
        /* background-color: rgba(250, 250, 0, 0.6); */
        margin-bottom: 0;
    }

    & .square {
        display: ${props => props.done ? "none" : "inline"};
    }

    & .check {
        display: ${props => props.done ? "inline" : "none"};
    }
`


    



