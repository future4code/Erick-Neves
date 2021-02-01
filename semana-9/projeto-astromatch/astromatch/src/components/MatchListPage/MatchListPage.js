import React, { useEffect, useState } from 'react'
import MatchListItem from './MatchListItem'
import styled from "styled-components"
import axios from 'axios'
import { baseUrl, axiosConfig } from "../parameters"

const ListContainer = styled.div`
/* margin-top: 10vh; */
  padding: 5px;
`


export default function MatchListPage() {
    //o que era antes uma variavel const fixa, vai passar a ser uma varivavel de estado a partir do useState
  const [matches, setMatches] = useState([])
   

    useEffect(() => {
        axios.get(`${baseUrl}/${axiosConfig}/matches`)
        .then(response => {
            console.log('MATCHlist',response.data.matches)
            setMatches(response.data.matches)
          })
          .catch((error) => {
            console.log(error);
          });
      
    }, [])
        

    return (
        <ListContainer>
            {matches.map((profile) => {
                //passamos a props profile de parametro com nome também chamada profile para o filho MatchListItem
                return <MatchListItem profile={profile} />
            }
            )}
        </ListContainer>
    )
}
