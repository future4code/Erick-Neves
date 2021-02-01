import React from 'react'
import styled from "styled-components";
import ButtonIconNot from '../../img/NaoFire.svg'
import ButtonIconYes from '../../img/SIMfire.svg'

const ImgButton = styled.img`
    height: 9vh;
    width: 10vh;
    cursor: pointer;
    outline: none;
    border:0;
    outline: 0;
    box-shadow: none;
    padding-bottom: 5vh;

    &:hover {
        transform: scale(1.5);
        transition: linear 0.2s;
  }
    &:focus {
        outline: none;
    }
 `

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    /* margin-bottom: 5vh; */
    padding-bottom: 7vh;
`

export default function ProfileChooseButtons(props) {

    return (
        <ButtonsContainer>
            
                <ImgButton onClick={props.onClickNot} src={ButtonIconNot} alt="não" />
            
            
                <ImgButton onClick={props.onClickYes} src={ButtonIconYes} alt="sim" />
            
        </ButtonsContainer>
    )
}
