import './App.css';

// components einbinden
import Headline from './components/Headline';
import Home from './components/Home';
import Todo from './components/Todo';
import Footer from './components/Footer';

// Styled Components importieren
import styled from "styled-components";

//Browser-Router importieren
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//CUSTOM-HOOK importieren
import useTodos from './hooks/useTodos';


// App
function App() {

  //CUSTOM-HOOCK deklarieren
  const [todos, setTodos, addTodo, deleteTodo, toggleTodo] = useTodos();

  return (
    <StyledAppWrapper>

      <Headline />

      <BrowserRouter>

        <Routes>
          
          <Route path="/" element={ <Home todos={todos} setTodos={setTodos} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} /> } />
          <Route path="/test" element={ <div>Test</div> } />
          <Route path="todo/:id" element={ <Todo todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} /> } />
          
        </Routes>

        <Link to="/"><Footer /></Link>
          
      </BrowserRouter>
   
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

