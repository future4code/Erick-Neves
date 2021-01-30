import React from 'react'
import styled from "styled-components"

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;  
  border: 1px solid black;
  border-radius: 5px;

  :hover {
      background-color: rgba(0, 0, 0, 0.3);
  }
`
const Avatar = styled.img`
    border-radius: 50%;
    margin-right: 8px;
    margin-left: 5px;
`

export default function MatchListItem() {
    return (
        <ItemContainer>
            <Avatar src={'https://picsum.photos/30/30'} />
            <p>Nome da pessoa</p>
        </ItemContainer>
    )
}
