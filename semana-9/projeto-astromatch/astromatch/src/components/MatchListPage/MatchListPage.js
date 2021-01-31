import React from 'react'
import MatchListItem from './MatchListItem'
import styled from "styled-components"

const ListContainer = styled.div`
  padding: 5px;

`

export default function MatchListPage() {
    const matches = [
        {
        "id": "71gMbZs2txS9LDvGK5Ew",
        "age": 26,
        "name": "Anitta",
        "photo": "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
        "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
        }
    ]
        

    return (
        //passamos a props profile de parametro com nome também chamada profile para o filho MatchListItem
        <ListContainer>
            {matches.map((profile) => {
                return <MatchListItem profile={profile} />
            }
            )}
        </ListContainer>
    )
}
