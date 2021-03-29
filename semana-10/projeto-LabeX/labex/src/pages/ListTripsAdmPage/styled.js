import styled from 'styled-components';
import space from '../../imgs/astronauta-terra-1400x800.jpg'


export const BoxTripListAdm = styled.div`
    justify-content: center;
    background-image: url(${space});
    background-size: 100%;
    height: 100vh;
    background-repeat: no-repeat;
`

export const ContainerMainTrips = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 10px;
    background: #000000a9;
    color: white;
    border-radius: 5px;
    min-height: 5vh;
`

export const ContainerInfoTrip = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export const BoxButton = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
    margin-bottom: 10px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 10px;
    
`


export const DetailButton = styled.button`
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: none;
    background: #f2f2f2;
    cursor: pointer;
    font-size: 2.5vh;
    &:focus {
        outline: none;
    }
    &:hover{
            background-color: darkblue;
            
            color: white;
        }
`


export const DelButton = styled.button`
    border-radius: 5px;
    border: 1px solid red;
    box-shadow: none;
    background: orange;
    cursor: pointer;
    font-size: 2.5vh;
    
    &:focus {
        outline: none;
    }
    &:hover{
            background-color: red;
            
            color: white;
        }
`