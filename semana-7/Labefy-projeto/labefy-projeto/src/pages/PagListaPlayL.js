import React from "react";
import axios from 'axios'
import styled from "styled-components"
import { baseUrl, axiosConfig } from '../parameters'

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

export class PagListaPlayL extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios.get(baseUrl, axiosConfig)
            .then((response) => {
                this.setState({ playlists: response.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    deletePlaylist = (playlistId) => {
        axios.delete(`${baseUrl}/${playlistId}`, axiosConfig)
            .then((response) => {
                this.getAllPlaylists()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        return (
            <BoxLista>
                <h2>Lista de Playlist</h2>
                {this.state.playlists.map((playl) => {
                    return (
                        <BoxListaPlay>
                            <ListaPlay>
                                {playl.name}
                                <BtnDelete onClick={() => { if (window.confirm('Tem certeza que deseja remover esta playlist?')) { this.deletePlaylist(playl.playlistId) } }}>X</BtnDelete>
                            </ListaPlay>
                            
                        </BoxListaPlay>
                    )
                })}
            </BoxLista>
        );
    }
}
