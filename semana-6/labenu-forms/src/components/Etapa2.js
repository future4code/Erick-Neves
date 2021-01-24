import React from "react";
import styled from 'styled-components'

const DivsEtapa2 = styled.div`
    margin: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Inputs = styled.input`
    margin: 2vh;
`

export default class Etapa2 extends React.Component {

    render() {
        return (
            <DivsEtapa2>
                <h2>ETAPA 2 - INFORMAÇÕES DE ENSINO SUPERIOR</h2>
                <form>
                    <DivsEtapa2>
                        <label for="curso">1. Qual curso?</label>
                        <Inputs id="curso" type="text" value={this.props.CursoInput}></Inputs>

                        <label for="unidade">2. Qual unidade de ensino?</label>
                        <Inputs id="unidade" type="text" value={this.props.IdadeInput}></Inputs>

                    </DivsEtapa2>
                </form>
                
            </DivsEtapa2>

        );
    }
}
