import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { goToCreateTripPage, goToListTripsAdmPage, goToLoginAdmPage } from "../../Router/Coordinator";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";



export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  margin: 15px;
  padding: 15px;
`;

const AdmPage = () => {
    useProtectedPage();
    const history = useHistory();

    const logout = () =>{
        localStorage.removeItem('token')
        goToLoginAdmPage(history)
    }

    return (
          <ButtonContainer>
            <button onClick={() => goToCreateTripPage(history)}>
              Criar viagens
            </button>
            <button onClick={() => goToListTripsAdmPage(history)}>
              Gerenciar Viagens
            </button>
            <Button variant={'contained'} type='submit' onClick={() => logout()}>Logout</Button>
          </ButtonContainer>
    );
  };

export default AdmPage;