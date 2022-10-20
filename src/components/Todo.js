import { FaRegSquare, FaRegCheckSquare, FaRegTrashAlt } from "react-icons/fa";

import styled from "styled-components";
import StyledImgWrapper from "./StyledImgWrapper";

// Wird benötigt für BrowserRouter --> zum Auslesen von URL-Parametern (USE-HOOK)
import { useParams } from "react-router-dom";


// ----------------------------------------------------------------------  //


// TODO-OBJEKT/ELEMENT definieren
//Alle properties, die ich in App.js den jeweilgen Komponenten übergebe, der enntsprechenden const zuweisen
//todo für id url abfrage ?!?
const Todo = ({ todoTitle, todoId, todoDone, todo, todos, setTodos }) => {

    //USE-HOOCK definieren
    //Parameter der in der App.js im Pfad abgefragt wird (id)
    const { id } = useParams;

    // FUNKTION 
    // die Klick-Funktion erhält einen Parameter (Id)    ?!?
    // die setter-Funktion durchläuft den state (todos) 
    // die Filter-Methode (filter) schreibt ein neues Array mit den Elementen (e) die NICHT die Id des aktuellen (geklickten) Elements hat 
    //if-Abfrage für Aufruf über URL sonst Aufruf üebr Home
    const handleDeleteClick = (e, paramTodoID) => {
        if (paramTodoID) setTodos(todos.filter(e => e.id !== paramTodoID))
        else setTodos (todos.filter(e => e.id !== todoId)) 
    }  

    //die SETTER-FUNCTION (setTodo) itteriert mit der .map-Methode durch das Array des STATE (todos)
    //Bei dem Element (e) des Arrays, bei welchem die id die selbe ist, wie die des aktuell geklicktenn Objekts,
    //soll der Wert des properties(?) done von false auf true oder anders herum geändert werden 
    const handelToggleClick = (e, paramTodoID) => {
        if (paramTodoID) setTodos(
            todos.map(
                e => { if (e.id === paramTodoID) e.done =!e.done; return e }
            )
        );
        else setTodos(
            todos.map(
                e => { if (e.id === todoId) e.done =!e.done; return e }
            )
        );
    }
    
    console.log(id, todos)

    // Wenn der Parameter (id) aus dem USE-HOOK und ein aktueller STATE true sind (also existieren)  
    if (id && todos ) {
        
        // Fall 1: Anfrage kommt über URL-Route (dabei wird nur der WERT der id übergeben
        // Über FIND-METHODE wird im STATE-Array (todos) das Element id gesucht
        // ist diese gleich der id des aktuewllen Elements (e)
        // wird das Ergebnbis als neues Objekt in die const (paramTodo) geschrieben
        const paramTodo = todos.find(e => String(e.id) === id );

        // wenn die const (paramTodo) gefüllt ist wird nur das Todo der entsprechende id angezeigt
        if (paramTodo) {return (
            <StyledTodo done={paramTodo.done}>
                {paramTodo.text} 
                <StyledImgWrapper>
                    <FaRegSquare className="square" onClick={e => handelToggleClick(e, paramTodo.id)} /> 
                    <FaRegCheckSquare className="check" onClick={e => handelToggleClick(e, paramTodo.id)} /> 
                    <FaRegTrashAlt className="trash" onClick={e => handleDeleteClick(e, paramTodo.id)} /> 
                </StyledImgWrapper> 
            </StyledTodo>
        )} else return <div>nicht gefunden</div>;

    //Fall 2: Der Aufruf kommt aus der HOME-Komponente
    // es werden alle Todos angezeigt
    } else {
        return (
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


    



