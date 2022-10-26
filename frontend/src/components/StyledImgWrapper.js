import styled from "styled-components";


const StyledImgWrapper = styled.div`
    /* background-color: rgba(0, 250, 250, 0.4); */
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 10px;

    & > svg {
        /* background-color: rgba(250, 0, 0, 0.4); */
        margin-right: 4px;
    }
    
    & > svg:last-child {
        /* background-color: rgba(250, 0, 0, 0.6); */
        margin: 0;
    }

    & > svg:hover {
        /* background-color: rgba(0, 250, 250, 0.8); */
        cursor: pointer;
    }
` 

export default StyledImgWrapper;

