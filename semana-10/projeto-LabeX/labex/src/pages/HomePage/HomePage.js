import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { goToListTripsPage } from "../../Router/Coordinator";
import { ContainerHome, AboutUsContainer, TextAboutUs } from "./styled";

const HomePage = () => {
  const history = useHistory();

  return (
    <ContainerHome>
      <AboutUsContainer>
        <div>
          <h1>Quem somos?</h1>
          <TextAboutUs>
            {" "}
            A LabeX é uma agencia de viagens espaciais, que tem o objetivo de oferecer as melhores viagens
            disponíveis por todo o sistema solar, nossa meta é proporcionar experiências
            inesqueciveis.
          </TextAboutUs>
          <Button variant={'contained'} color="primary" type='submit' onClick={() => goToListTripsPage(history)}>
            VEJA NOSSAS VIAGENS
          </Button>
        </div>
        
      </AboutUsContainer>
    </ContainerHome>
  );
};

export default HomePage;