import './App.css';

// My components 
import Headline from './components/Headline';
import Home from './components/Home';
import Todo from './components/Todo';
import Footer from './components/Footer';

// My Context (CUSTOM-CONTEXT-HOOK)
import { TodoAppContextProvider } from './providers/TodoAppContext';

// External Components 
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


// Main component
function App() {
  return (

    //CONTEXT-HOOK als Komponente bereitstellen durch CONTEXT-PROVIDER
    //Alle Komponenten in den CONTEXT-HOOK einfügen
    //Doppelte Klammern weil value ein Objekt ist
    //Alle props für die Komponenten aus dem CUSTOM-HOOK in value einfügen --> damit sie überall zur Verfügungn stehen --> als Unterobjekte
    <TodoAppContextProvider>

      <StyledAppWrapper>

        <Headline />

        <BrowserRouter>

          <Routes>
            
            <Route path="/" element={ <Home /> } />
            <Route path="/test" element={ <div>Test</div> } />
            <Route path="todo/:id" element={ <Todo /> } />
            
          </Routes>

          <Link to="/"><Footer /></Link>
            
        </BrowserRouter>
    
      </StyledAppWrapper>

    </TodoAppContextProvider>
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

