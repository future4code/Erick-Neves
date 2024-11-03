import React from "react";
import "./App.css";
import styled from "styled-components"
import { PagCadastro } from "./pages/PagCadastro";
import { PagListaUsuarios } from "./pages/PagListaUsuarios";

const BoxApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0px;
  border: 1px solid orange;
  box-shadow: 1px 1px 15px orange;
  border-radius: 9px;
`
const BtnPage = styled.button`
  margin: 30px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: orangered;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  &:hover {
    background-color: orange;
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
        <h1>Cadastro Labenusers</h1>
        {this.state.page ? <PagCadastro /> : <PagListaUsuarios />}

        <BtnPage onClick={this.changePage}> {this.state.page ? 'Lista de usuários' : 'Cadastro de usuários'} </BtnPage>

      </BoxApp>
    );
  }
}
