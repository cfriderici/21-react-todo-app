// Styled Components importieren
import styled from "styled-components";



// ------ COMPONENT ------  //

const Headline = () => {
    return (
        // <h1 className="headline">ToDo-App</h1>
        <StyledH1>ToDo-App</StyledH1>
    );
}

export default Headline;



// ------ STYLED COMPONENTS ------  //

const StyledH1 = styled.h1`
    /* background-color: rgba(250, 0, 0, 0.2); */
    color: white;
    text-shadow: 1px 1px 4px gray; ;
    width: 80%;
    text-align: center;

@media only screen and (min-width: 992px) {
    width: 50%;
}
`