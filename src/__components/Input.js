import { FaRegPlusSquare } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';


//Ref- und State-Hook für Datenabfrage einfügen
import { useRef, useState } from "react";



// State-hook mit destructioring definiieren (todosund settodos) und die anderen Komponenten-elemente aus app.js
const Input = ({ todos, setTodos }) => {

    // den Ref-Hoock in einer const definieren
    const todoNameRef = useRef();

    //State-Hook
    const newTodoItem = () => {
        // nur wenn Input nicht leer ist
        if (todoNameRef.current.value !== "") {
            setTodos([...todos, 
                {
                    id: uuidv4(),
                    text: todoNameRef.current.value,
                    done: false
                }
            ])
            todoNameRef.current.value = "";
        }
      }
      

    // onKlick-Funktion definieren --> sie muss im selben element wie der useRef sein
    const handleAddClick = () => {
        // console.log(todoNameRef.current.value);
        // todoNameRef.current.value = "";
        newTodoItem();
    }

    // on keypress function --> waru e hier nnicht in Klammern ?!?
    const handleAddKeyPress = e => {
        if (e.keyCode === 13) {
            // console.log("Enter gedrückt");
            newTodoItem();
        }
    }
    
    
    return (
        <div className="input-wrapper">
            {/* dieses element als anker für die addclick-funktion  und für die keypress-aktion (diese nur auf input-elementen möglich)  */}
            <input className="input-field" placeholder="neues ToDo eingeben" ref={todoNameRef} onKeyDown={handleAddKeyPress}></input>
            <div className="img-wrapper">
                <FaRegPlusSquare className="input-img" onClick={handleAddClick} />
            </div>
        </div>
    );
}

export default Input;