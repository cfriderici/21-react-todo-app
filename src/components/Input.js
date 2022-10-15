import { FaRegPlusSquare } from "react-icons/fa";

// uuid einbinden für einzigartige ids in .json
import { v4 as uuidv4 } from 'uuid';

// Styled Components
import styled from "styled-components";
import StyledImgWrapper from "./StyledImgWrapper";

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
    // ein neues Objekt hinzu (,{ ... })  --> Spread-Operator hinter das existierende aarray 
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
            //Inputfeld leeren
            todoNameRef.current.value = "";

            //neuesn SATE im LOCAL STORAGE speichern mit useEffect

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
        <StyledInputWrapper>
            {/* 
                Dieses Element als Anker für die addclick- und keypress-Aktion 
                Diese nur auf input-elementen möglich 
            */}
            <StyledInput placeholder="neues ToDo eingeben" ref={todoNameRef} onKeyDown={handleAddKeyPress}></StyledInput>
            
            <StyledImgWrapper> 
                <FaRegPlusSquare onClick={handleAddClick} /> 
            </StyledImgWrapper>

        </StyledInputWrapper>
    );
}

export default Input;


// ------ STYLED COMPONENTS ------  //

const StyledInput = styled.input`
    background-color: transparent;
    /* background-color: rgba(0, 250, 0, 0.2); */
    width: 100%;
    border: none;
    outline: none;
`

const StyledInputWrapper = styled.div`
    background-color: white;
    /* background-color: rgba(0, 250, 0, 0.4); */
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    box-shadow: inset 1px 1px 4px gray;
    padding: 6px;
    margin-bottom: 30px;
`