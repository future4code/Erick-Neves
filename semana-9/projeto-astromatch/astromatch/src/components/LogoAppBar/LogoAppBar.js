import React from "react";
import styled from "styled-components";

const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid darkgrey;
`



export default function LogoAppBar(props) {
  return (
    <AppBarContainer>
        <button onClick={props.goToProfileMainPagePropOnMain} >Escolher Match</button>
        <p>
            astroMatch logo
        </p>
        <button onClick={props.goToMatchListPagePropOnMain}>Lista de Match</button>
    </AppBarContainer>
  );
}
