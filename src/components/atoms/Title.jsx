import styled from "styled-components";

const TitleStyled = styled.h2`
    font-size: 30px;
    font-weight: bold;
    color: #2b2b2c;
    text-align: center;
    font-family: "Orbitron", sans-serif;
    font-weight: 700;
   `;

function Title(props) {
    return (
        <>
            <TitleStyled>{props.title}</TitleStyled>
        </>
    );
}

export default Title;
