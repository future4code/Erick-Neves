import { goToHomePage, goToListTripsPage, goToApplicationFormPage, goToLoginAdmPage } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom"
import { BoxHeader, ButtonHeader, HiperlinkHome, LogoHeader, ListBtnHeader, UlistsBtnHeader } from "./styled";


const Header = () => {

  const history = useHistory()

  return (
    <BoxHeader>
      <HiperlinkHome>
        <LogoHeader onClick={() => goToHomePage(history)}>LabeX</LogoHeader>
      </HiperlinkHome>
      <UlistsBtnHeader>
        <ListBtnHeader>
          <ButtonHeader  onClick={() => goToApplicationFormPage(history)}>Inscreva-se</ButtonHeader>
        </ListBtnHeader>
        <ListBtnHeader>
          <ButtonHeader  onClick={() => goToListTripsPage(history)}>Lista de viagens</ButtonHeader>
        </ListBtnHeader>
        <ListBtnHeader>
          <ButtonHeader  onClick={() => goToLoginAdmPage(history)}>Login</ButtonHeader>
        </ListBtnHeader>
      </UlistsBtnHeader>
    </BoxHeader>
    )
};

export default Header;