import { FaRegPlusSquare } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';


// REF-HOOK in der jeweiligen Komponente importieren 
// (im Gegensatz zum State-Hook)
import { useRef } from "react";


// ----------------------------------------------------------------------  //

// STATE-HOOK und SETTER-FUNKTION wurden dem Input-Element als propertys in der App übergeben
// Hier mit object-destructioring einbeinden 
const Input = ({ todos, setTodos }) => {


    // REF-HOOK in einer const definieren
    // Kann heißen wie will aber Ref im Namen ist weiche Konvention
    // "= useRef ()" muss sein --> dadurch wird die const erst zu einem Ref-Hook 
    const todoNameRef = useRef();


    // FUNKTION: Neues Todo-Element mittels dem todoArray hizufügen, wenn Input nicht leer ist
    // STATE-HOOK + REF-HOOK
    // Bei Aufruf der const (newTodoItem)
    // fügt die setter-function (setTodos) dem array des aktuellen states (todos) 
    // mittels der push-Methode ([...]) des array-destructurings 
    // ein neues Objekt hinzu (,{ ... })
    // mit dem Text des aktuellen Inputs (todoNameRef.current.value) (REF)
    const newTodoItem = () => {
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

      
    // ONKLICK-FUNKTION / EVENTS
    // Muss im selben Element wie der REF-HOOK sein
    // Die Funktionen sollen die newTodoItem-Funktion aufrufen
    const handleAddClick = () => {
        // console.log(todoNameRef.current.value);
        // todoNameRef.current.value = "";
        newTodoItem();
    }


    // ONKEYPRES-FUNKTION
    // warum e (event) hier nicht in Klammern --> weil nur ein Parameter übergeben wird.
    const handleAddKeyPress = e => {
        if (e.keyCode === 13) {
            // console.log("Enter gedrückt");
            newTodoItem();
        }
    }
    
    
    return (
        <div className="input-wrapper">
            {/* 
                Dieses Element als Anker für die addclick- und keypress-Aktion 
                Diese nur auf input-elementen möglich 
            */}
            <input className="input-field" placeholder="neues ToDo eingeben" ref={todoNameRef} onKeyDown={handleAddKeyPress}></input>
            <div className="img-wrapper">
                <FaRegPlusSquare className="input-img" onClick={handleAddClick} />
            </div>
        </div>
    );
}

export default Input;