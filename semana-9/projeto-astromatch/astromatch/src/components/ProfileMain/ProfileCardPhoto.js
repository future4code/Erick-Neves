import React from 'react'
import styled from "styled-components"

const ProfileCardContainer = styled.div`
    margin: 15px;
    border: 1px solid black;
`
const ProfilePhoto = styled.img`
    width: 100%;
`

export default function ProfileCardPhoto() {
    return (
        <ProfileCardContainer>
            <ProfilePhoto src={'https://picsum.photos/300/300'} />
            <p>Nome da pessoa, Idade</p>
            <p>Descrição da pessoa</p>
        </ProfileCardContainer>
    )
}
