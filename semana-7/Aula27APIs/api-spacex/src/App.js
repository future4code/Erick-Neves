import React from "react";
import "./App.css";
import axios from 'axios'

export default class App extends React.Component {
  state = {
    launches: [],
    imgrocket: "",
  }

  componentDidMount = () => {
    this.getLaunches()
  }

  getLaunches = () => {
    axios.get('https://api.spacexdata.com/v4/launches/past')
    .then((res) => {
      this.setState({launches: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }


  getImgRocket = (patch) => {
    axios
    .get(`https://api.spacexdata.com/v4/launches/${patch}`)
    .then((res) => {
      console.log(res.data.small)
      this.setState({imgrocket: res.date.small})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Lista de Lançamentos da SpaceX</h1>
        {this.state.launches.map((launch) => {
          return (
            <div key={launch.id}>
              <div>
              <img src={this.state.imgrocket} alt={"rocket"} />
              </div>
              <h3>{launch.name}</h3>
              <p>{launch.details}</p>
              <p>Data local do lançamento: {launch.date_local}</p>
              <a href={launch.links.webcast} target="_blank">Vídeo do lançamento</a><br />
              <a href={launch.links.wikipedia} target="_blank">Saber mais</a>
              <hr />
            </div>
          )
        })}
      </div>
    );
  }
}