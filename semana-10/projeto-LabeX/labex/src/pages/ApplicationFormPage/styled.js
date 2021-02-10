import styled from "styled-components";
import space from '../../imgs/ficcaoDesenhoNave.jpg'

export const ContainerPage = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${space});
    background-size: 100%;
    /* height: 90vh; */
    background-repeat: repeat;
`

export const FormContainer = styled.form`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 50%;
    margin-top: 15px;
    margin-bottom: 10px;
    background: rgb(12,52,94, 0.8);
    color: white;
    border-radius: 5px;
    padding: 15px;
    min-height: 100vh;
    
    
`

