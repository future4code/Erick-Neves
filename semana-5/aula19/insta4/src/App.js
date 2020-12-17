import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
     
        {
          nomeUsuario:'lucas_mendes',
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/150'
        },
        {
          nomeUsuario:'gustavo_santos',
          fotoUsuario:'https://picsum.photos/50/49',
          fotoPost:'https://picsum.photos/200/149'
        },
        {
          nomeUsuario:'_paulo7',
          fotoUsuario:'https://picsum.photos/49/50',
          fotoPost:'https://picsum.photos/199/150'
        }
        
      ]
  }

    listaDeComponentes = this.state.posts.map((pessoa) => {
      return (
        <Post>
          {pessoa.nomeUsuario}{pessoa.fotoUsuario}{pessoa.fotoPost}
        </Post>
      )
    })

    render () {
    return (
      <div className={'app-container'}>
        <div>{this.listaDeComponentes}</div>
      </div>
    );
  }
 


}

export default App;
