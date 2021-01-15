import React from "react";
import "./App.css";
import styled from "styled-components"
import { PagPlayL } from "./pages/PagPlayL";
import { PagListaPlayL } from "./pages/PagListaPlayL";

const BoxApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0px;
  border: 1px solid green;
  box-shadow: 1px 1px 15px green;
  border-radius: 9px;
`
const BtnPage = styled.button`
  margin: 30px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: greenyellow;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  &:hover {
    background-color: green;
  };  
` 

export default class App extends React.Component {
  state = {
    page: true
  };

  changePage = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    return (
      <BoxApp>
        <h1>Labefy</h1>
        {this.state.page ? <PagPlayL /> : <PagListaPlayL />}

        <BtnPage onClick={this.changePage}> {this.state.page ? 'Lista de PlayLists' : 'Criar PlayList'} </BtnPage>

      </BoxApp>
    );
  }
}
