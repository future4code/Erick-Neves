import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToAdmPage } from "../Router/Coordinator";
import axios from "axios";
import { baseUrl } from "../parameters";
import styled from "styled-components";
import useForm from "../Hooks/useForm";
import { TextField, Button } from '@material-ui/core'

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
  gap: 17px;
`

// const Button = styled.button`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 80%;
//   height: 20px ;
//   padding: 15px;
//   margin-top: 30px;
//   border: 1px solid silver;
//   background: transparent;
//   color: white;
//   letter-spacing: 2px;
//   text-shadow: 1px 1px #000;
//   cursor: pointer;
//   transition: 0.3s linear;
//   &:hover {
//     background: silver;
//     color: black;
//     text-shadow: 1px 1px grey;
//   }
// `


export default function LoginAdmPage() {
  const history = useHistory();
  const [form, onChangeInput, clearFields] = useForm({ email: "", password: "" });

  const onSubmitLogin = (event) => {
    event.preventDefault();
    //Antes a gente tinha que fazer o body na mão juntando os estados:
    // Agora não precisa mais disso pois todos os estados estão atualizados no estado form! 
    axios
      .post(`${baseUrl}/login`, form)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token)
        goToAdmPage(history);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("BODY:", form);
    clearFields();
  };

  return (
    <LoginContainer>
      <BoxForm onSubmit={onSubmitLogin}>
        <h3>Login Admin - LabeX</h3>
        <div>
          <TextField
            variant="outlined"
            label={'E-mail'}
            type={'email'}
            onChange={onChangeInput}
            value={form['email']}
            name={'email'}
            required
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            label={'Senha'}
            name="password"
            value={form.password}
            type="password"
            onChange={onChangeInput}
            required
          />
        </div>
        <Button variant={'contained'} color={'primary'} type={'submit'} >LOGIN</Button>
      </BoxForm>
    </LoginContainer>

  );
}

