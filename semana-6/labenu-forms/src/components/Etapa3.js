import React from "react";
import styled from 'styled-components'

const DivsEtapa3 = styled.div`
    margin: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Inputs = styled.input`
    margin: 2vh;
`
const SelectCurso = styled.select`
margin: 2vh;
`

export default class Etapa3 extends React.Component {

    render() {
        return (
            <DivsEtapa3>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <form>
                    <DivsEtapa3>
                        <label for="curso">1. Por que você não terminou um curso de graduação?</label>
                        <Inputs id="curso" type="text" value={this.props.CursoInput}></Inputs>

                        <label for="esco">2. Você fez algum curso complementar?</label>
                        <SelectCurso id="esco">
                            <option selected disabled>Selecione</option>
                            <option>Curso técnico</option>
                            <option>Curso de inglês</option>
                            <option>Não fiz curso complementar</option>
                        </SelectCurso>
                    </DivsEtapa3>
                </form>
                
            </DivsEtapa3>

        );
    }
}
