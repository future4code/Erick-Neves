import styled from 'styled-components';


export const ContainerTrips = styled.div`

    display: flex;
    justify-content: center;
`

export const ContainerMainTrips = styled.div`
    width: 90%;
    margin-top: 100px;
    margin-bottom: 50px;
    top: 150px;
    background: #000000a3;
    color: white;
    border-radius: 5px;
    padding: 15px;
    min-height: 100vh;
    h1{
        margin: 0;
    }
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
    margin: 40px;
    border-radius: 10px;
    justify-content: center;
    justify-items: center;
    align-items: center;
`