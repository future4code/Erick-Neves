import styled from 'styled-components';
import space from '../../imgs/astronauta-terra-1400x800.jpg'


export const ContainerTrips = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${space});
    background-size: 100%;
    /* height: 90vh; */
    background-repeat: repeat;
`

export const ContainerMainTrips = styled.div`
    width: 90%;
    margin-top: 15px;
    margin-bottom: 10px;
    background: #000000a9;
    color: white;
    border-radius: 5px;
    padding: 15px;
    min-height: 100vh;
`

export const ContainerInfoTrip = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 40px;
`

export const ContainerItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 10px;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 0 13px;
    justify-content: space-between;
    
`

export const BoxButton = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
    justify-content: center;
    justify-items: center;
    align-items: center;
`