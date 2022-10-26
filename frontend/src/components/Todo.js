import { FaRegSquare, FaRegCheckSquare, FaRegTrashAlt } from "react-icons/fa";

import styled from "styled-components";
import StyledImgWrapper from "./StyledImgWrapper";

// Wird benötigt für BrowserRouter --> zum Auslesen von URL-Parametern (USE-HOOK)
import { useParams } from "react-router-dom";

//CUSTOM-CONTEXT-HOOK importieren
import { useTodoAppContext } from "../providers/TodoAppContext";



// ----------------------------------------------------------------------  //


// TODO-OBJEKT/ELEMENT definieren
//Alle properties, die ich in App.js den jeweilgen Komponenten übergebe, der enntsprechenden const zuweisen
//todo für id url abfrage ?!?
//und CONTEXT-HOOK
const Todo = ({ todoTitle, todoId, todoDone }) => {
    const {todos, deleteTodo, toggleTodo } = useTodoAppContext();

    //USE-HOOCK definieren
    //Parameter der in der App.js im Pfad abgefragt wird (id)
    const { id } = useParams();
    
    
    // Die 2 Event-Funktionen (onDeleteTodoClick/onToggleTodoClick) erhalten den Parameter (paramTodoId) zur Identifikation das aktuellen Elements
    // Bei Klick werden die Funktionen aus dem CUSTOM-HOOK (deleteTodo/toggleTodo) aufgerufgen 
    // if-Abfrage für Aufruf über URL sonst Aufruf üebr Home
    const onDeleteTodoClick = (e, paramTodoId) => {
        if (paramTodoId) deleteTodo(paramTodoId);
        else deleteTodo (todoId); 
    }  
    const onToggleTodoClick = (e, paramTodoId) => {
        if (paramTodoId) toggleTodo(paramTodoId);
        else toggleTodo (todoId);
    }
    

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
                    <FaRegSquare className="square" onClick={e => onToggleTodoClick(e, paramTodo.id)} /> 
                    <FaRegCheckSquare className="check" onClick={e => onToggleTodoClick(e, paramTodo.id)} /> 
                    <FaRegTrashAlt className="trash" onClick={e => onDeleteTodoClick(e, paramTodo.id)} /> 
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
                    <FaRegSquare className="square" onClick={onToggleTodoClick} /> 
                    <FaRegCheckSquare className="check" onClick={onToggleTodoClick} /> 
                    <FaRegTrashAlt className="trash" onClick={onDeleteTodoClick} /> 
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


    



