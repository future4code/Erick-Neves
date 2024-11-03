import React from "react";
import styled from 'styled-components'

const DivsFinal = styled.div`
    margin: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default class Etapa2 extends React.Component {

    render() {
        return (
            <DivsFinal>
                <h2>O FORMULÁRIO ACABOU</h2>
                <h3>Muito obrigado por participar! Entraremos em contato!</h3>
            </DivsFinal>

        );
    }
}
