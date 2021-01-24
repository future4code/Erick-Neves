import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'lucas_mendes'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'gustavo_santos'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/149'}
        />
        <Post
          nomeUsuario={'_paulo7'}
          fotoUsuario={'https://picsum.photos/49/50'}
          fotoPost={'https://picsum.photos/199/150'}
        />
        
      </div>

    );
  }
}

export default App;
