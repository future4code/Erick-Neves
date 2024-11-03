import React from "react";
import Main from "./components/Main/Main";
import ResetButton from "./components/ResetButton/ResetButton";
import "./App.css";
import styled from "styled-components"

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   top: 6vh;
// `;

export default function App() {
  return (
    <div class="App" >
      <Main />
      <ResetButton />
    </div>
  );
}
