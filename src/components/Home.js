import Todo from './Todo';
import Input from './Input';

import styled from "styled-components";


const Home = ({ todos, setTodos }) => {
    return(
        <StyledHomeWrapper>

            {/* STATE-HOOK und SETTER-FUNKTION in die Input-Komponente durchreichen
            state und setter als property übergeben: (todos) / (setTodos)
            den properties einen Wert und eine Setter-Funktion zuweisen: (={todos}) / (={setTodos})
            Das Input-Element erhält als property den oben definierten state todos mit dem aktuellen Inhalt des todoArrays */}
            <Input todos={todos} setTodos={setTodos} />
            
            <StyledTodosWrapper>

                {/* STATE-HOOK der aktuelle state (todos) wird mit der .map-Funktion itteriert
                und es werden pro Element (e) folgende properties übergeben:
                Bei der property key kann ich destructuering nicht anwenden (weil festes react-Element) 
                --> daher wird die Id nochmal über todoID übergeben  */}
                {
                    todos ?
                    todos.map(e => (
                        <Todo key={e.id} todoId={e.id} todoTitle={e.text} todoDone={e.done} todos={todos} setTodos={setTodos} />
                    )) : null
                }

            </StyledTodosWrapper>

      </StyledHomeWrapper>
    )
}

export default Home;



// ------ STYLED COMPONENTS ------  //


const StyledHomeWrapper = styled.div`
    /* background-color: rgba(0, 250, 250, 0.2); */
    width: 100%;
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
`

const StyledTodosWrapper = styled.div`
    /* background-color: rgba(0, 250, 250, 0.4); */
    width: 50%;
    margin-bottom: 30px;
`