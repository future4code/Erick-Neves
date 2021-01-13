import React from 'react';
import axios from 'axios';
import styled from "styled-components"
import {baseUrl, axiosConfig} from '../parameters'

const BoxCadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: 10px;
  border: 1px solid orangered;
  box-shadow: 1px 1px 15px orange;
  border-radius: 9px;
`
const BtnCadastro = styled.button`
  margin: 30px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: orangered;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  &:hover {
    background-color: orange;
  };  
` 
const InputForm = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 13px;
    padding: 0.3rem 35px;
    font-weight: 500;
    &:hover {
        background-color: orange;
        
    };  
`

export class PagCadastro extends React.Component {
  state = {
    inputName: '',
    inputEmail: ''
  }

  handleInputName = (event) => {
    this.setState({inputName: event.target.value})
  }
  
  handleInputEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }

    console.log('body', body)

    axios.post(baseUrl, body, axiosConfig)
    .then((response) => {
      alert("Usuário cadastrado com sucesso!")
      this.setState({inputName: '', inputEmail: ''})
    })
    .catch((error) => {
      alert("Erro no cadastro: Nome ou e-mail em formato inválido, tente novamente.")
    })
  }

  render() {
    return (
      <BoxCadastro>
        <h2>Cadastro</h2>
        <form>

            <div>
            <label >Nome: </label>
            <InputForm placeholder='Nome' value={this.state.inputName} onChange={this.handleInputName} />
            </div>

            <div>
            <label >Email: </label>
            <InputForm placeholder='E-mail' value={this.state.inputEmail} onChange={this.handleInputEmail} />
            </div>

        </form>
        <BtnCadastro onClick={this.createUser}>Cadastrar</BtnCadastro>
      </BoxCadastro>
    )
  }
}