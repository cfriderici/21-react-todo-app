// ===== Custom Hook wenn Objekte in der App mehrfach aufgerufen werden ===== //


// uuid einbinden für einzigartige ids in .json
import { v4 as uuidv4 } from 'uuid';

// STATE-HOOK + EFFECT-HOOK einbinden 
// um die Eingabe aus Input nach Todo zu übergeben 
// in function dann eine const mit SATTE definnieren
import { useState, useEffect } from 'react';


//CUSTOM HOOK definieren muss auch exportiert werden (wie bei Komponente)
const useTodos = () => {

    //Einen Key für den LOCAL STORAGE definieren (EFFECT-HOOK)
    //warum Großbuchstaben --> Conventionn: const immer GHroß (schreibweise bei react hooks ist Ausnahme)
    const LOCAL_STORAGE_KEY = "local_storage_todos"

    // STATE-HOOK immer nur innerhalb der Funktion der Hauptkomponente ausführen !!! 
    // State als const definieren (todos)
    // State eine Setter-Funktion zuweisen (setTodos) 
    // ( State selber darf nur über die Setter-Funktion verändert werden !!! )
    // State soll als Startwert unseren todoArray haben ( = useState(todoArray); )
    // 
    // Für EFFECT-HOOK wird kein Startwert für den STATE übergeben, 
    // sondern er ist undefined ( = useState(); )
    const [todos, setTodos] = useState();

    // EFFECT-HOOK
    // const zum Laden des neuen Arrays  ?!? 
    // Zu Beginn undefined --> weil noch kein LOCAL_STORAGE_KEY existiert
    const loadTodosFromLocalStorage = () => {
        if (localStorage.getItem(LOCAL_STORAGE_KEY)  !== null)
            return  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        else return [];
        }

    // EFFEKT-HOOK
    // const zum Speichern eines neuen Elements in den LOCAL-STORAGE für das Array (todoArray) definieren  ?!?
    const saveTodosToLocalStorage = todoArray => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoArray));
    }

    //wenn Daten in STAGE vorhanden (nicht undefined)
    useEffect( () => {
    if (todos) saveTodosToLocalStorage(todos);
    }, [todos] );

    //Einmaliges laden des STORAGE bei erstem Auffruf der App
    useEffect( () => {
    const storage = loadTodosFromLocalStorage();
    setTodos(storage);
    }, [] ); 


    // FUNKTION: Neues Todo-Element mittels dem todoArray hizufügen, wenn Input nicht leer ist
    // STATE-HOOK + REF-HOOK
    // Bei Aufruf der const (addTodo)
    // fügt die setter-function (setTodos) dem array des aktuellen states (todos) 
    // mittels der push-Methode ([...]) des array-destructurings 
    // ein neues Objekt hinzu (,{ ... })  --> Spread-Operator hinter das existierende array 
    // mit dem Text des aktuellen Inputs (text) (REF)
    const addTodo = text => {
        setTodos([...todos, 
            {
                id: uuidv4(),
                text: text,
                done: false
            }
            
        ])
    }

    // Die 2 FUNKTIONEN erhalten je den Parameter (Id) zur Identifikation der Elemente ?!?
    // Die setter-Funktion durchläuft den state (todos) 
    // die Filter-Methode (filter) schreibt ein neues Array mit den Elementen (e) die NICHT die Id des aktuellen Elements hat 
    const deleteTodo = id  => {
        setTodos(todos.filter(e => e.id !== id))
    }
    // Die SETTER-FUNCTION (setTodo) itteriert mit der .map-Methode durch das Array des STATE (todos)
    // Bei dem Element (e) des Arrays, bei welchem die id die Gleiche ist, wie die des aktuell geklicktenn Objekts,
    // soll der Wert des properties(?) done von false auf true oder anders herum geändert werden 
    const toggleTodo = id => {
        setTodos(
            todos.map(
                e => { if (e.id === id) e.done =!e.done; return e }
            )
        );
    }

    //STATE und immer auch die SETTER-FUNCTION und die neue Hilfsfunktionen des CUSTOM-HOOK in einem Array übergeben
    return [todos, setTodos, addTodo, deleteTodo, toggleTodo]
}

export default useTodos;


