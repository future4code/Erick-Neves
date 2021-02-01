import React, { useState } from 'react'
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
