import styled from "styled-components";
import space from '../../imgs/astronauta-capa-610x350.jpg'

export const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${space});
    background-size: 100%;
    /* height: 90vh; */
    background-repeat: repeat;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  background-image: url(${space});
  background-size: 100%;
  height: 90vh;
  
`

export const BoxForm = styled.form`
  display: flex;
  flex-direction: column; 
  margin: 0 20px;
  padding: 15px 10px;
  color: white;
  gap: 16px;
  background-color: grey;
  border: 1px solid black;
  border-radius: 5px;
  background: rgb(12,52,94, 0.9);
  
`

export const ContainerPageBtn = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${space});
    background-size: 100%;
    height: 90vh;
    background-repeat: repeat;
    align-items: center;
    align-content: center;
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8vh;
    align-items: center;
    align-content: center;
    background-color: rgb(12,52,94, 0.7);
    width: 25%;
    height: 50%;
    border-radius: 5px;
    
`