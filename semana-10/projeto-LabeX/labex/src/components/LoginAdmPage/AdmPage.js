import React from "react";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { goToAproveAndReproveTrips, goToCreateTripPage, goToDeleteTrips } from "../Router/Coordinator";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";



export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;

const AdmPage = () => {
    useProtectedPage();
    const history = useHistory();
    return (
          <ButtonContainer>
            <button onClick={() => goToCreateTripPage(history)}>
              Criar viagens
            </button>
            <button onClick={() => goToDeleteTrips(history)}>
              Deletar viagens
            </button>
            <button onClick={() => goToAproveAndReproveTrips(history)}>
              Avaliar candidatos
            </button>
          </ButtonContainer>
    );
  };

export default AdmPage;