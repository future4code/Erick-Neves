import React, { useState } from 'react'
import LogoAppBar from "../LogoAppBar/LogoAppBar"
import MatchListPage from '../MatchListPage/MatchListPage'
import ProfileMain from '../ProfileMain/ProfileMain'
import styled from "styled-components"

const MainContainer = styled.div`
  margin: auto;
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 90vh;
  width: 50vh;
  box-shadow: 2px 2px 10px -2px;
  border-radius: 5px;
  background-color: white;

`

export default function Main() {
//criando o estado para controlar qual a pagina que vai renderizar ao selecionar a pagina
  const [selectedPage, setSelectedPage] = useState('profile-main-page')

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case 'profile-main-page':
        return <ProfileMain />
      case 'match-list-page':
        return <MatchListPage />
      default:
        return <ProfileMain />
    }
  }

//funções que atualizam o estado (devem está no mesmo componente do estado)
  const goToProfileMainPage = () => {
    setSelectedPage('profile-main-page')
  }

  const goToMatchListPage = () => {
    setSelectedPage('match-list-page')
  }



  return (
    <MainContainer>
      <LogoAppBar
        //passando as funções de mudar/atualizar a pag como props para serem usadas no LogoAppBar
        goToProfileMainPagePropOnMain={goToProfileMainPage}
        goToMatchListPagePropOnMain={goToMatchListPage}
      />
      {renderSelectedPage()}
    </MainContainer>
  )
}
