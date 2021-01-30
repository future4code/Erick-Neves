import React from 'react'
import styled from "styled-components";

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export default function ProfileChooseButtons() {
    return (
        <ButtonsContainer>
            <button>Não</button>
            <button>Sim</button>

        </ButtonsContainer>
    )
}
