import React from 'react'
import LogoAppBar from "../LogoAppBar/LogoAppBar"
import MatchListPage from '../MatchListPage/MatchListPage'
import ProfileMain from '../ProfileMain/ProfileMain'
import styled from "styled-components"

const MainContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 400px;
  height: 600px;
  margin: 15px;

`

export default function Main() {
  return (
    <MainContainer>
      <LogoAppBar />
      {/* <ProfileMain /> */}
      <MatchListPage /> 
    </MainContainer>
  )
}
