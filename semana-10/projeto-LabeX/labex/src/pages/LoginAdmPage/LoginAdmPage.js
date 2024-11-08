import { useHistory } from "react-router-dom";
import { goToAdmPage } from "../../Router/Coordinator";
import axios from "axios";
import { baseUrl } from "../../Parameters/parameters";
import styled from "styled-components";
import useForm from "../../Hooks/useForm";
import { TextField, Button } from '@material-ui/core'
import { BoxForm, LoginContainer } from "./styles";
import PageTitle from "../../components/PageTitle";


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
      <PageTitle title={'Login ADM'} />
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

