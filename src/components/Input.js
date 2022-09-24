// import React from "react";  ?!?
import { FaRegPlusSquare } from "react-icons/fa";


//useRef-Hook für Datenabfrage einfügen
import { useRef } from "react";





const Input = () => {

    // den Hoock in einer const definieren
    const todoNameRef = useRef();

    // onKlick-Funktion definieren --> sie muss im selben element wie der useRef sein
    const handleAddClick = () => {
        console.log(todoNameRef.current.value);
        todoNameRef.current.value = "";
    }

    return (
        <div className="input-wrapper">
            <input className="input-field" placeholder="neues ToDo eingeben" ref={todoNameRef}></input>
            <div className="img-wrapper">
                <FaRegPlusSquare className="input-img" onClick={handleAddClick} />
            </div>
        </div>
    );
}

export default Input;