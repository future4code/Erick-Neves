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
    height: 30px;
    width: 30px;
`
// recebe a props profile do pai MatchListPage 
export default function MatchListItem(props) {
    const profile = props.profile
    //declaramos como constante para facilitar não escrever varias vezes props.profile
    return (
        
        <ItemContainer>
            <Avatar src={profile.photo} />
            <p>{profile.name}</p>
        </ItemContainer>
    )
}
