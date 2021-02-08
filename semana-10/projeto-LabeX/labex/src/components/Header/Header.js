import { goToHomePage, goToListTripsPage, goToApplicationFormPage, goToLoginAdmPage } from "../Router/Coordinator";

import {useHistory} from "react-router-dom"
import styled from "styled-components"

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: grey;
`;

const Header = () => {
  const history = useHistory()

  return <HeaderContainer>
    <h2>Labex</h2>
    <button onClick={() => goToHomePage(history)}>Home</button>
    <button onClick={() => goToApplicationFormPage(history)}>Inscreva-se</button>
    <button onClick={() => goToListTripsPage(history)}>Lista de viagens</button>
    <button onClick={() => goToLoginAdmPage(history)}>Login ADM</button>
    </HeaderContainer>;
};

export default Header;