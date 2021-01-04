import React from "react";

export default class Etapa1 extends React.Component {

    render() {
        return (
    <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <div>
            <p>Qual é o seu nome?</p>
            <input value={this.props.UserInput}></input>
        </div>
    </div>

    );
  }
}
