import React from 'react';
import axios from 'axios';
import styled from "styled-components"
import {baseUrl, axiosConfig} from '../parameters'

const BoxCreatePlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: 10px;
  border: 1px solid greenyellow;
  box-shadow: 1px 1px 15px green;
  border-radius: 9px;
`
const BtnCreate = styled.button`
  margin: 30px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: greenyellow;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  &:hover {
    background-color: green;
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
        background-color: green;
        
    };  
`

export class PagPlayL extends React.Component {
  state = {
    inputName: '',
    
  }

  handleInputName = (event) => {
    this.setState({inputName: event.target.value})
  }
  
  

  createPlaylist = () => {
    const body = {
      name: this.state.inputName,
      
    }

    console.log('body', body)

    axios.post(baseUrl, body, axiosConfig)
    .then((response) => {
      alert("Play List criada com sucesso!")
      this.setState({inputName: ''})
    })
    .catch((error) => {
      alert("Erro: Nome já existente, tente novamente.")
    })
  }

  render() {
    return (
      <BoxCreatePlay>
        <h2>Crie sua Playlist</h2>
        <form>

            <div>
            <label >Nome: </label>
            <InputForm placeholder='Nome' value={this.state.inputName} onChange={this.handleInputName} />
            </div>

        </form>
        <BtnCreate onClick={this.createPlaylist}>Criar</BtnCreate>
      </BoxCreatePlay>
    )
  }
}