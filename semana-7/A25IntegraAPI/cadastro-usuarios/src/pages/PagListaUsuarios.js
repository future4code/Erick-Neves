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
    border: 1px solid orangered;
    box-shadow: 1px 1px 15px orange;
    border-radius: 9px;
`
const BoxListaUser = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    width: 30vw;
    border: 1px solid orange;
    box-shadow: 1px 1px 15px orange;
    border-radius: 9px;
`
const ListaUser = styled.ul`
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
    background-color: orangered;
  };  
`

export class PagListaUsuarios extends React.Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    // getAllUsers = () => {
    //     axios.get(baseUrl, axiosConfig)
    //         .then((response) => {
    //             this.setState({ users: response.data })
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    getAllUsers = async () => {
        try {
          const response = await axios.get(baseUrl, axiosConfig)
          console.log(response.data)
          this.setState({users: response.data})
        } catch(error) {
          console.log(error)
        }
      }

    deleteUser = (id) => {
        axios.delete(`${baseUrl}/${id}`, axiosConfig)
            .then((response) => {
                this.getAllUsers()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        return (
            <BoxLista>
                <h2>Lista de usuários</h2>
                {this.state.users.map((user) => {
                    return (
                        <BoxListaUser>
                            <ListaUser>
                                {user.name}
                                <BtnDelete onClick={() => { if (window.confirm('Tem certeza que deseja remover este usuário?')) { this.deleteUser(user.id) } }}>X</BtnDelete>
                            </ListaUser>
                            
                        </BoxListaUser>
                    )
                })}
            </BoxLista>
        );
    }
}
