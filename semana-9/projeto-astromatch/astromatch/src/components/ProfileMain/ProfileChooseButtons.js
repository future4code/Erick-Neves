import React from 'react'
import styled from "styled-components";

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export default function ProfileChooseButtons(props) {

    return (
        <ButtonsContainer>
            <button onClick={props.onClickNot}>Não</button>
            <button onClick={props.onClickYes}>Sim</button>
        </ButtonsContainer>
    )
}
