import React from "react";
import styled from "styled-components";
import LogoIMG from "../../img/logo-astromatch.png"

const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14vh;
    padding: 0px 5vh;
    border-bottom: 1px solid darkgrey;
`

const ImgLogo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7vh; 
`



export default function LogoAppBar(props) {
  return (
    <AppBarContainer>
        <button onClick={props.goToProfileMainPagePropOnMain}>Match</button>
        
        <ImgLogo src={LogoIMG}/>
        
        <button onClick={props.goToMatchListPagePropOnMain}>Lista</button>
    </AppBarContainer>
  );
}
