import styled from 'styled-components'

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: black;
  
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  width: 100vw;
  background-color: black;
`;

export const HiperlinkHome = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const LogoHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  margin: 0;
  padding: 10px;
  cursor: pointer;
  color: silver;
  &:hover{
        color: white;
    }
`;

export const UlistsBtnHeader = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  font-family: "Roboto", sans-serif;
  margin: 0vh 10vh;
`;
export const ListBtnHeader = styled.li`
  margin: 0vh 3vh;
  font-size: 3.2vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonHeader = styled.button`
  padding: 0.5vh;
  height: 5vh;
  width: 20vh;
  border-radius: 10px;
  border-width: 0.2vh;
  background: #f2f2f2;
  cursor: pointer;
  font-size: 2.5vh;
  &:focus {
    outline: none;
  }
  &:hover{
        background-color: darkblue;
        border-radius: 10px;
        color: white;
    }
`;