import React from 'react';
import './App.css';
import Post from './components/Post/Post';

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

      ]
  }

    listaDeComponentes = this.state.posts.map((pessoa) => {
      return (
        <Post
        nomeUsuario={pessoa.nomeUsua}
        fotoUsuario={pessoa.fotoUsua}
        fotoPost={pessoa.fotoPostar}
        />
      )
    })

    render () {
    return (
      <div className={'app-container'}>
        {this.listaDeComponentes}
      </div>
    );
  }

}

export default App;