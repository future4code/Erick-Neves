import React from "react";
import "./App.css";
import axios from 'axios'
import styled from "styled-components";

const BoxLaunchs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 70%;
  border: 2px solid red;
  height: 50%;
  margin: auto;
  background-color: black;
  color: white;

  h3, p, a {
    margin: 15px 15px;
    
  }

`;

const BoxLista = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  background-color: #1C1C1C;
  color: red;
  padding: 1%; 
  
`;

const BoxImg = styled.div`
  
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  padding: 2%;

  img {
    height: 90%;
    width: 90%;
    margin: 20px;
    
  }

`;


export default class App extends React.Component {
  state = {
    launches: [],
  }

  componentDidMount = () => {
    this.getLaunches()
  }

  getLaunches = async () => {
    try {
      const resp = await axios.get('https://api.spacexdata.com/v4/launches/past')
      this.setState({launches: resp.data})
    }
    catch(error) {
      console.log(error)
    }
  }


  render() {
    return (
      <BoxLista>
        <h1>Lançamentos da SpaceX</h1>
        {this.state.launches.map((launch) => {
          return (
            <BoxLaunchs key={launch.id}>
              <BoxImg>
              <img src={launch.links.patch.small} alt={"rocket-img"} />
              </BoxImg>
              <h3>{launch.flight_number}º</h3>
              <h3>{launch.name}</h3>
              <p>{launch.details}</p>
              <div>Data local do lançamento:<p>{launch.date_local}</p></div>
              <a href={launch.links.webcast} target="_blank">Vídeo do lançamento</a><br />
              <a href={launch.links.wikipedia} target="_blank">Saiba mais</a>
              
            </BoxLaunchs>
          )
        })}
      </BoxLista>
    );
  }
}