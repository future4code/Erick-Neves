import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToAdmPage } from "../Router/Coordinator";
import axios from "axios";
import { baseUrl } from "../parameters";
import styled from "styled-components";


const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 150px;
  left: 50%;
  transform: translate(-50%);
  max-width: 300px;
  height: 300px;
  background-color: grey;
  border: 1px solid black;
  border-radius: 70px;
`

const BoxForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  padding: 10px;
  color: white;
  gap: 15px;
`

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 20px ;
  padding: 15px;
  margin-top: 30px;
  border: 1px solid silver;
  background: transparent;
  color: white;
  letter-spacing: 2px;
  text-shadow: 1px 1px #000;
  cursor: pointer;
  transition: 0.3s linear;
  &:hover {
    background: silver;
    color: black;
    text-shadow: 1px 1px grey;
  }
`


export default function LoginAdmPage() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token=localStorage.getItem("token")

    if(token){
        goToAdmPage(history);
    }
  }, [history])

  const loginAdm = () => {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(`${baseUrl}/loginAdm`, body)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token)
        goToAdmPage(history);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (

      <LoginContainer>
        <BoxForm>
          <h3>Login Admin - LabeX</h3>
          <div>
            <label>E-mail:</label>
            <input type="e-mail" onChange={handleEmail} />
          </div>
          <div>
            <label>Senha:</label>
            <input type="password" onChange={handlePassword} />
          </div>
        </BoxForm>
        <Button onClick={loginAdm}>LOGIN</Button>
      </LoginContainer>
  );
}
