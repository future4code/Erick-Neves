import React from "react";
import "./App.css";
import styled from "styled-components";
import { PagPlayL } from "./pages/PagPlayL";

const BoxApp = styled.div`
  display: flex;
  
`

export default class App extends React.Component {

  render() {
    return (
      <BoxApp>
        <h1>Labefy</h1>
        <PagPlayL />

      </BoxApp>
    );
  }
}
