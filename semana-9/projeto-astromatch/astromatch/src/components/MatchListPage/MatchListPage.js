import React from 'react'
import MatchListItem from './MatchListItem'
import styled from "styled-components"

const ListContainer = styled.div`
  padding: 5px;

`

export default function MatchListPage() {
    return (
        <ListContainer>
            <MatchListItem />
            <MatchListItem />
            <MatchListItem />
            <MatchListItem />
        </ListContainer>
    )
}
