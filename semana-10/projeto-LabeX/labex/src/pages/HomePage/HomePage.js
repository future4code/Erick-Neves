import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { goToListTripsPage } from "../../Router/Coordinator";
import { ContainerHome, AboutUsContainer, TextAboutUs, ContainerButton } from "./styled";

const HomePage = () => {
  const history = useHistory();

  return (
    <ContainerHome>
      <AboutUsContainer>
        <div>
        <PageTitle title={'Quem somos?'} />
          <TextAboutUs>
            {" "}
            A LabeX é uma agencia de viagens espaciais, que tem o objetivo de oferecer as melhores viagens
            disponíveis por todo o sistema solar, nossa meta é proporcionar experiências
            inesqueciveis.
          </TextAboutUs>
          <ContainerButton>
            <Button variant={'contained'} color="primary" type='submit' onClick={() => goToListTripsPage(history)}>
              VEJA NOSSAS VIAGENS
            </Button>
          </ContainerButton>
        </div>
        
      </AboutUsContainer>
    </ContainerHome>
  );
};

export default HomePage;