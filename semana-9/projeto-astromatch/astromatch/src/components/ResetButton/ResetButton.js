import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../parameters";
import styled from "styled-components";

const ButtonReset = styled.button`
  margin-top: 2vh;  
  bottom: 2vh;
  height: 25px;
  width: 150px;
  background-color: red;
  color: black;
  font-weight: bold;
  border: 2px solid #000;
  border-radius: 5px;

  &:hover {
    background-color: orange;
    color: red;
    transition: linear 0.3s;
  }
`;

export default function ResetButton() {
    const onClickReset = () => {
        axios.put(`${baseUrl}/${axiosConfig}/clear`)
          .then(response => {
              console.log(response)
            })
            .catch((error) => {
                console.log(error)
              })
    }

  return (
    <div>
        <ButtonReset onClick={onClickReset}>Resetar matchers</ButtonReset>
    </div>
  );
}
