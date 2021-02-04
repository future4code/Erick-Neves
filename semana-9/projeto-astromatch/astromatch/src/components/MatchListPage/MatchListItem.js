import React from 'react'
import styled from "styled-components"

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5vh;  
  padding: 0.5vh;
  border: 1px solid black;
  border-radius: 5px;

  :hover {
      background-color: rgba(0, 0, 0, 0.3);
  }
`
const Avatar = styled.img`
    border-radius: 50%;
    display: flex;
    margin: 1vh 1vh 1vh 1vh;
    height: 8vh;
    width: 8vh;
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
