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
  margin: 15px;
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

// Styled da lista playlist criada -----------------------------------------------------------------

const BoxLista = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    width: 70vw;
    border: 1px solid greenyellow;
    box-shadow: 1px 1px 15px green;
    border-radius: 9px;
`
const BoxListaMusic = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: space-evenly;
    
    width: 70vw;
    border: 1px solid greenyellow;
    box-shadow: 1px 1px 15px green;
    border-radius: 9px;
`
const BoxListaPlay = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    width: 30vw;
    border: 1px solid green;
    box-shadow: 1px 1px 15px green;
    border-radius: 9px;
`
const ListaPlay = styled.ul`
    display: flex;
    justify-content: space-between;
    font-size:3vh;
    font-weight: 500;

`

const BtnDelete = styled.button`
  margin-left: 20px;
  cursor: pointer;
  padding: 0.3rem 1rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 500;
  
  &:hover {
    background-color: greenyellow;
  };  
`

export class PagPlayL extends React.Component {
  state = {
    inputNamePlaylist: '',
    inputNameMusic: [],
    inputNameArtistBand: [],
    inputUrl: [],
    // selectedPlaylistId: "",

    playlists: [],
    track: [],
    page: true,
    
  }

  componentDidMount = () => {
    this.getAllPlaylists()
    this.getPlaylistMusicTrack()
    // this.setState({ openPlaylistTracks: false });
    
}

  handleinputNamePlaylist = (event) => {
    this.setState({inputNamePlaylist: event.target.value})
  }


  handleinputNameMusic = (event) => {
    this.setState({inputNameMusic: event.target.value})
  }

  handleinputNameArtistBand = (event) => {
    this.setState({inputNameArtistBand: event.target.value})
  }

  handleinputUrl = (event) => {
    this.setState({inputUrl: event.target.value})
  }
  
// ----- Criar, pegar e deletar da parte da playlist

  createPlaylist = () => {
    const body = {
      name: this.state.inputNamePlaylist,
      
    }

    console.log('body', body)

    axios.post(baseUrl, body, axiosConfig)
    .then((response) => {
      this.getAllPlaylists();
      alert("Play List criada com sucesso!")
      this.setState({inputNamePlaylist: ''})
    })
    .catch((error) => {
      alert("Erro: Nome já existente, tente novamente.")
    })
  }

  getAllPlaylists = () => {
    axios.get(baseUrl, axiosConfig)
        .then((response) => {
            this.setState({ playlists: response.data.result.list })
        })
        .catch((error) => {
            console.log(error)
        })
}


  deletePlaylist = (id) => {
      axios.delete(`${baseUrl}/${id}`, axiosConfig)
          .then((response) => {
              this.getAllPlaylists()
          })
          .catch((error) => {
              console.log(error)
              alert("Erro ao deletar playlist")
          })
  }


// ----- Criar, pegar da parte da musica/track de adicionar

  createTrackMusicToPlaylist = (e) => {
    const id = e.target.value
    const body = {
      name: this.state.inputNameMusic,
      artist: this.state.inputNameArtistBand,
      url: this.state.inputUrl,
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body,
    {
      headers: {
        Authorization: "erick-neves-epps"
      }
    }
  )
    .then((response) => {
      alert("Música criada com sucesso!")
      this.getPlaylistMusicTrack()
    })
    .catch((error) => {
      alert("Erro: Nome já existente, tente novamente.")
    })
  }

  getPlaylistMusicTrack = (id) => {
        axios.get(`${baseUrl}/${id}/tracks`, axiosConfig)
            .then((response) => {
                this.setState({ track: response.data.result.tracks })

                console.log(response.data.result.tracks)
            })
            .catch((error) => {
                console.log(error)
            })
    }
  
  

// ----- deletar, abrir janela, da parte da musica/track da janela de acesso da musica

  // deleteTrackFromPlaylist = (id) => {
  //     axios.delete(`${baseUrl}/${id}/tracks`, axiosConfig)
  //         .then((response) => {
  //             this.getPlaylistMusicTrack()
  //         })
  //         .catch((error) => {
  //             console.log(error)
  //             alert("Erro ao deletar track")
  //         })
  // }
  
  

  Page = () => {
    if(this.state.page) {
    return (
      <BoxCreatePlay>
        <div>
          <h2>Crie sua Playlist</h2>
          <form>

            <div>
              <label >Nome da sua playlist: </label>
              <InputForm placeholder='Digite um nome para a playlist' value={this.state.inputNamePlaylist} onChange={this.handleinputNamePlaylist} />
            </div>

          </form>
        </div>
        <BtnCreate onClick={this.createPlaylist}>Criar</BtnCreate>

        <div>
          <h2>Adicione músicas a sua Playlist</h2>
          <form>

            <div>
              <label >Nome da música: </label>
              <InputForm placeholder='Digite o nome da música' value={this.state.inputNameMusic} onChange={this.handleinputNameMusic} />
            </div>

            <div>
              <label >Nome do artista ou banda: </label>
              <InputForm placeholder='Digite o nome do artista ou banda' value={this.state.inputNameArtistBand} onChange={this.handleinputNameArtistBand} />
            </div>

            <div>
              <label >Link para a música: </label>
              <InputForm placeholder='Coloque o link para a música' value={this.state.inputUrl} onChange={this.handleinputUrl} />
            </div>

            <div>
              <label >Em qual playlist deseja adicionar: </label>
              <select onChange={this.createTrackMusicToPlaylist}> <option></option> {this.state.playlists.map((index) => {
                         return ( 
                                <option value={index.id}>{index.name}</option> 
                         );
                        })}
              </select> 
            </div>
            <BtnCreate onClick={this.createTrackMusicToPlaylist}>Adicionar a playlist</BtnCreate>

          </form>
        </div>

        <BoxLista>
                <h2>Lista de Playlist</h2>
                {this.state.playlists.map((index) => {
                    return (
                        <BoxListaPlay>
                            <ListaPlay>
                                {index.name}
                                <BtnCreate onClick={this.getPlaylistMusicTrack(index.id)}>Acessar</BtnCreate>
                                <BtnDelete onClick={() => { if (window.confirm('Tem certeza que deseja remover esta playlist?')) { this.deletePlaylist(index.id) } }}>X</BtnDelete>
                            </ListaPlay>
                            
                        </BoxListaPlay>
                    )
                })}
            </BoxLista>
            {/* <button onClick={this.props.state}>voltar</button> */}
      </BoxCreatePlay>

    )} else {
      return (
        <BoxCreatePlay>
          <div>
            <h2>Crie sua Playlist</h2>
            <form>
  
              <div>
                <label >Nome da sua playlist: </label>
                <InputForm placeholder='Digite um nome para a playlist' value={this.state.inputNamePlaylist} onChange={this.handleinputNamePlaylist} />
              </div>
  
            </form>
          </div>
          <BtnCreate onClick={this.createPlaylist}>Criar</BtnCreate>
  
          <div>
            <h2>Adicione músicas a sua Playlist</h2>
            <form>
  
              <div>
                <label >Nome da música: </label>
                <InputForm placeholder='Digite o nome da música' value={this.state.inputNameMusic} onChange={this.handleinputNameMusic} />
              </div>
  
              <div>
                <label >Nome do artista ou banda: </label>
                <InputForm placeholder='Digite o nome do artista ou banda' value={this.state.inputNameArtistBand} onChange={this.handleinputNameArtistBand} />
              </div>
  
              <div>
                <label >Link para a música: </label>
                <InputForm placeholder='Coloque o link para a música' value={this.state.inputUrl} onChange={this.handleinputUrl} />
              </div>
  
              <div>
                <label >Em qual playlist deseja adicionar: </label>
                <select onChange={this.createTrackMusicToPlaylist}> <option></option> {this.state.playlists.map((index) => {
                           return ( 
                                  <option value={index.id}>{index.name}</option> 
                           );
                          })}
                </select> 
              </div>
              
  
            </form>
          </div>
  
          <BoxListaMusic>
                  <h2>Lista de Músicas da playlist</h2>
                  {this.state.track.map((index) => {
                      return (
                          <BoxListaPlay>
                              <ListaPlay>
                                  <p>{index.name}</p>
                                  <p>{index.artist}</p>
                                  <audio src ={index.url} controls='controls'></audio>
                                  
                              </ListaPlay>
                              
                          </BoxListaPlay>
                      )
                  })}
              </BoxListaMusic>
              <button onClick={this.voltarPlaylist}>voltar</button>
        </BoxCreatePlay>
      )
    }
  }

    render() {
      return (
        <div>
          {this.Page()}
        </div>
      ); 
      
   }
  }
  
