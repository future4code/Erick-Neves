import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { goToCreateTripPage, goToListTripsAdmPage, goToLoginAdmPage } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ButtonContainer, ContainerPageBtn } from "./styles";


const AdmPage = () => {
    useProtectedPage();
    const history = useHistory();

    const logout = () =>{
        localStorage.removeItem('token')
        goToLoginAdmPage(history)
    }

    return (
      <ContainerPageBtn>
          <ButtonContainer>
            <Button variant={'contained'} color={'primary'} type={'submit'} onClick={() => goToCreateTripPage(history)}>
              Criar viagens
            </Button>
            <Button variant={'contained'} color={'primary'} type={'submit'} onClick={() => goToListTripsAdmPage(history)}>
              Gerenciar Viagens
            </Button>
            <Button variant={'contained'} type='submit' onClick={() => logout()}>Logout</Button>
          </ButtonContainer>
      </ContainerPageBtn>
    );
  };

export default AdmPage;