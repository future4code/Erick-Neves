import React from "react";
import styled from 'styled-components'

const DivsEtapa1 = styled.div`
    margin: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Inputs = styled.input`
    margin: 2vh;
`
const SelectEsco = styled.select`
margin: 2vh;
`

export default class Etapa1 extends React.Component {

    render() {
        return (
            <DivsEtapa1>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <form>
                    <DivsEtapa1>
                        <label for="nome">1. Qual é o seu nome?</label>
                        <Inputs id="nome" type="text" value={this.props.NomeInput}></Inputs>

                        <label for="idade">2. Qual é a sua idade?</label>
                        <Inputs id="idade" type="number" value={this.props.IdadeInput}></Inputs>

                        <label for="e-mail">3. Qual é seu e-mail?</label>
                        <Inputs id="e-mail" type="e-mail" value={this.props.EmailInput}></Inputs>

                        <label for="esco">4. Qual é a sua escolaridade?</label>
                        <SelectEsco id="esco">
                            <option selected disabled>Selecione seu nível</option>
                            <option>Ensino Médio Incompleto</option>
                            <option>Ensino Médio Completo</option>
                            <option>Ensino Superior Incompleto</option>
                            <option>Ensino Superior Completo</option>
                        </SelectEsco>

                    </DivsEtapa1>
                </form>
                
            </DivsEtapa1>

        );
    }
}
