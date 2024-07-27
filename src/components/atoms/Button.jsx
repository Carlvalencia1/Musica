import styled from "styled-components";
const ButtonStyled = styled.button`
width: 50%;
    height: 30px;
    background-color: #da3535;
    border: 1px solid #f80000;
    border-radius: 6px;
    font-size: 14px;
    color: #ffffff; 
    width: auto;

    &:hover {
        background-color: #cf0303;
    }
`;

function Button(props){
    return(
        <ButtonStyled onClick={props.onClick} >{props.text}</ButtonStyled>
    )
}

export default Button;