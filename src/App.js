import './App.css';

// components einbinden
import Headline from './components/Headline';
import Home from './components/Home';
// import Todo from './components/Todo';
// import Input from './components/Input';
import Footer from './components/Footer';

// Styled Components importieren
import styled from "styled-components";

//Browser-Router importieren
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// STATE-HOOK + EFFECT-HOOK einbinden 
// um die Eingabe aus Input nach Todo zu übergeben 
// in function dann eine const mit SATTE definnieren
import { useState, useEffect } from 'react';


// ----------------------------------------------------------------------  //
// Array einbinden
// const todoArray =[
//   {
//     id: uuidv4(),
//     text: "Ein ToDo",
//     done: false
//   },
//   {
//     id: uuidv4(),
//     text: "Noch ein ToDo",
//     done: false
//   },
//   {
//     id: uuidv4(),
//     text: "Und noch ein ToDo",
//     done: false
//   },
//   {
//   id: uuidv4(),
//   text: "Und ein gaaaanz langes ToDo",
//   done: false
//   }
// ]
// ----------------------------------------------------------------------  //


// Einen Key für den LOCAL STORAGE definieren (EFFECT-HOOK)
//warum Großbuchstaben --> Conventionn: const immer GHroß (schreibweise bei react hooks ist Ausnahme)
const LOCAL_STORAGE_KEY = "local_storage_todos"


// App
function App() {

  // STATE-HOOK immer nur innerhalb der Funktion der Hauptkomponente ausführen !!! 
  // State als const definieren (todos)
  // State eine Setter-Funktion zuweisen (setTodos) 
  // ( State selber darf nur über die Setter-Funktion verändert werden !!! )
  // State soll als Startwert unseren todoArray haben ( = useState(todoArray); )
  // 
  // Für EFFECT-HOOK wird kein Startwert für den STATE übergeben, 
  // sondern er ist undefined ( = useState(); )
  const [todos, setTodos] = useState();

  // EFFEKT-HOOK
  // const zum Speichern eines neuen Elements in den LOCAL-STORAGE für das Array (todoArray) definieren  ?!?
    const saveTodosToLocalStorage = todoArray => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoArray));
  }

  // EFFECT-HOOK
  // const zum Laden des neuen Arrays  ?!? 
  // Zu Beginn undefined --> weil noch kein LOCAL_STORAGE_KEY existiert
  const loadTodosFromLocalStorage = () => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY)  !== null)
      return  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    else return [];
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



  return (
    <StyledAppWrapper>

      <Headline />

      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={ <Home todos={todos} setTodos={setTodos} />} />
          <Route path="/test" element={ <div>Test</div> } />
          
        </Routes>
      </BrowserRouter>
   
      <Footer /> 

    </StyledAppWrapper>
  );
}

export default App;


// ------ STYLED COMPONENTS ------  //

const StyledAppWrapper = styled.div `
    /* background-color: rgba(250, 250, 0, 0.2); */
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100vw; */
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 1px 1px 4px gray;

    @media only screen and (max-width: 600px) {
    } 

    @media only screen and (min-width: 600px) {
      /* width: 100vw; */
    } 

    @media only screen and (min-width: 768px) {
      width: 75vw;
    } 

    @media only screen and (min-width: 992px) {
      width: 50vw;
    }

    @media only screen and (min-width: 1200px) {
      
    }
`

// const StyledTodoWrapper = styled.div`
//     /* background-color: rgba(0, 250, 250, 0.4); */
//     width: 50%;
//     margin-bottom: 30px;
// `

