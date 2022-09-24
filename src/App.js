import './App.css';

// components einbinden
import Headline from './components/Headline';
import Todo from './components/Todo';
import Input from './components/Input';
import Footer from './components/Footer';

// uuid einbinden für einzigartige ids in .json
import { v4 as uuidv4 } from 'uuid';

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
  text: "Ein gaaaanz langes ToDo",
  done: false
  }
]


// App
function App() {
  return (
    <div className="App">

      <Headline />
      <Input />
      
      <div className='todo-wrapper'>
        {
          todoArray.map(e => (
            <Todo title={e.text} key={e.id}/>
          ))
        }
      </div>

      <Footer /> 

    </div>
  );
}

export default App;
