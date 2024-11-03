import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const FormAdd = styled.div`
  margin: ${props => props.marginTopDown} ${props => props.marginLeftRigth};
`

const Input = styled.input`
  margin: ${props => props.marginTopDown} ${props => props.marginLeftRigth};
`

const ButtonPostar = styled.button`
  color: white;
  background-color: #000;
` 

class App extends React.Component {
  state = {
    posts: [

        {
          nomeUsua:'lucas_mendes',
          fotoUsua:'https://picsum.photos/50/50',
          fotoPostar:'https://picsum.photos/200/150'
        },
        {
          nomeUsua:'gustavo_santos',
          fotoUsua:'https://picsum.photos/50/49',
          fotoPostar:'https://picsum.photos/200/149'
        },
        {
          nomeUsua:'_paulo7',
          fotoUsua:'https://picsum.photos/49/50',
          fotoPostar:'https://picsum.photos/199/150'
        },

      ],

      inputNomeUsua: '',
      inputFotoUsua: '',
      inputFotoPostar: '',

  }

  adicionarPost = () => {
    console.log('clicou')
    const novoPost = {
      nomeUsua: this.state.inputNomeUsua,
      fotoUsua: this.state.inputFotoUsua,
      fotoPostar: this.state.inputFotoPostar,
    }

    const novaPostagem = [novoPost, ...this.state.posts]
    this.setState({posts: novaPostagem})
  }

  addChangeInputNomeUsua = (event) => {
    console.log('Input nome do usuário', event.target.value)
    this.setState({inputNomeUsua: event.target.value})
  }

  addChangeInputFotoUsua = (event) => {
    console.log('Input foto do usuário', event.target.value)
    this.setState({inputFotoUsua: event.target.value})
  }

  addChangeInputFotoPostar = (event) => {
    console.log('Input foto a postar', event.target.value)
    this.setState({inputFotoPostar: event.target.value})
  }

  render () {

    const listaDeComponentes = this.state.posts.map((pessoa) => {
      return (
        <Post
        nomeUsuario={pessoa.nomeUsua}
        fotoUsuario={pessoa.fotoUsua}
        fotoPost={pessoa.fotoPostar}
        />
      )
    })

    
    return (
      <div className={'app-container'}>
        <FormAdd marginTopDown="30px" marginLeftRigth="20px">
            <Input marginTopDown="20px" marginLeftRigth="10px" value={this.state.inputNomeUsua} placeholder="Nome do usuário" onChange={this.addChangeInputNomeUsua}/>
            <Input marginTopDown="20px" marginLeftRigth="10px" value={this.state.inputFotoUsua} placeholder="Foto do usuário" onChange={this.addChangeInputFotoUsua}/>
            <Input marginTopDown="20px" marginLeftRigth="10px" value={this.state.inputFotoPostar} placeholder="Foto para postar" onChange={this.addChangeInputFotoPostar}/>
            <ButtonPostar onClick={this.adicionarPost}>Postar</ButtonPostar>
        </FormAdd>
        <div className={'app-container'}>{listaDeComponentes}</div>

      </div>
    );
  }

}

export default App;