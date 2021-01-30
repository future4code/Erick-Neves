import React from 'react'
import LogoAppBar from "../LogoAppBar/LogoAppBar"
import MatchListPage from '../MatchListPage/MatchListPage'
import ProfileMain from '../ProfileMain/ProfileMain'

export default function Main() {
  return (
    <div>
      <LogoAppBar />
      <hr />
      {/* <ProfileMain /> */}
      <MatchListPage /> 
    </div>
  )
}
