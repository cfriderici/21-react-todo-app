import './App.css';

// components einbinden
import Headline from './components/Headline';
import Todo from './components/Todo';
import Input from './components/Input';
import Footer from './components/Footer';

// uuid einbinden für einzigartige ids in .json
import { v4 as uuidv4 } from 'uuid';

// STATE-HOOK einbinden (um die Eingabe aus Input nach Todo zu übergeben --> in function dann eine const mit State definnieren)
import { useState } from 'react';


// ----------------------------------------------------------------------  //

// Array einbinden
const todoArray =[
  {
    id: uuidv4(),
    text: "Ein ToDo",
    done: false
  },
  {
    id: uuidv4(),
    text: "Noch ein ToDo",
    done: false
  },
  {
    id: uuidv4(),
    text: "Und noch ein ToDo",
    done: false
  },
  {
  id: uuidv4(),
  text: "Und ein gaaaanz langes ToDo",
  done: false
  }
]


// ----------------------------------------------------------------------  //


// App
function App() {

  // STATE-HOOK immer nur innerhalb der Funktion der Hauptkomponente ausführen !!! 
  // State als const definieren (todos)
  // State eine Setter-Funktion zuweisen (setTodos) 
  // ( State selber darf nur über die Setter-Funktion verändert werden !!! )
  // State soll als Startwert unseren todoArray haben (= useState(todoArray))
  const [todos, setTodos] = useState(todoArray);

  return (
    <div className="App">

      <Headline />

      {/* 
      STATE-HOOK und SETTER-FUNKTION in die Input-Komponente durchreichen
      state und setter als property übergeben: (todos) / (setTodos)
      den properties einen Wert und eine Setter-Funktion zuweisen: (={todos}) / (={setTodos})
      --> Das Input-Element erhält als property den oben definierten state todos mit dem aktuellen Inhalt des todoArrays
      */}
      <Input todos={todos} setTodos={setTodos} />
      
      <div className='todo-wrapper'>

        {/*
        STATE-HOOK der aktuelle state (todos) wird mit der .map-Funktion itteriert
        und es werden pro Element (e) folgende properties übergeben:
        Bei der property key kann ich destructuering nicht anwenden (weil festes react-Element) 
        --> daher wird die Id nochmal über todoID übergeben 
       */}
        {
          todos.map(e => (
            <Todo key={e.id} todoId={e.id} todoTitle={e.text} todoDone={e.done} todos={todos} setTodos={setTodos} />
          ))
        }
      </div>

      <Footer /> 

    </div>
  );
}

export default App;
