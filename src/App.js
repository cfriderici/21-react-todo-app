import './App.css';

// components einbinden
import Headline from './components/Headline';
import Todo from './components/Todo';
import Input from './components/Input';
import Footer from './components/Footer';

// uuid einbinden für einzigartige ids in .json
import { v4 as uuidv4 } from 'uuid';

// State Hook einbinden (um die Eingabe aus Input nach Todo zu übergeben --> in function dann eine const mit State definnieren)
import React, { useState } from 'react';




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
  text: "Ein gaaaanz langes ToDo",
  done: false
  }
]






// App
function App() {

  // State-Hook Const definieren --> muss in der function sein --> unser Array s.o. soll vorausgefüllt sein!!! 
  const [todos, setTodos] = useState(todoArray);




  return (
    <div className="App">

      <Headline />

      {/* State-Hoock --> was passiert hier ?!? */}
      <Input todos={todos} setTodos={setTodos} />
      
      <div className='todo-wrapper'>
        {
          todoArray.map(e => (
            // state hook --> der State hook  muss in die komponente übergeben werden
            <Todo title={e.text} key={e.id} todos={todos} setTodos={setTodos} />
          ))
        }
      </div>

      <Footer /> 

    </div>
  );
}

export default App;
