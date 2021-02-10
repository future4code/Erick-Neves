import axios from "axios";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import useForm from "../../Hooks/useForm";
import { baseUrl } from "../../Parameters/parameters";
import PageTitle from "../../components/PageTitle";
import { ContainerPage, FormContainer } from "../ApplicationFormPage/styled";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { goToAdmPage } from "../../Router/Coordinator";


const CreateTripPage = () => {
  useProtectedPage()
  
  const history = useHistory()

  const [form, onChangeInput, clearFields] = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: '',
  })

  const planetList = [
    'Terra', 'Vênus', 'Saturno', 'Marte', 'Júpter', 'Urano', 'Netuno', 'Mércurio'
  ]

  const createTrip = (event) => {
    event.preventDefault()
    clearFields()
    axios.post(`${baseUrl}/trips`, form, {
      headers: {
        auth: window.localStorage.getItem("token"),
      }
    })
      .then((res) => {
        alert('Viagem criada')
      })
      .catch((error) => {
        alert('Não criou a viagem')
      })
  }

  return (
    <ContainerPage>
      <FormContainer onSubmit={createTrip}>
      <PageTitle title={'Criar viagem'} />
        <TextField variant="outlined" label={'Name'}
          name='name'
          value={form.name}
          onChange={onChangeInput}
          id='nome'
          type='text'
          required
        />

        <TextField variant="outlined"
          name='date'
          value={form.date}
          onChange={onChangeInput}
          id='date'
          type='date'
          required
        />

        <TextField variant="outlined" label="Descrição da viagem"
          name='description'
          value={form.description}
          onChange={onChangeInput}
          id='description'
          type='text'
          required
        />

        <TextField variant="outlined" label="Duração em dias"
          name='durationInDays'
          value={form.durationInDays}
          onChange={onChangeInput}
          id='durationInDays'
          type='number'
          required
        />
        <FormControl>
          <InputLabel variant="outlined" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined">Planeta</InputLabel>
          <Select variant="outlined" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined"
            label="Planeta"
            name='planet'
            value={form.planet}
            onChange={onChangeInput}
            type='option'
            required
          >
            {planetList.map((planet) => {
              return (
                <MenuItem value={planet}>{planet}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <Button variant={'contained'} color="primary" type='submit'>Criar</Button>
  
        <Button variant={'contained'} type={'submit'} onClick={() => goToAdmPage(history)}>Voltar</Button>

      </FormContainer>
    </ContainerPage>
  )
};

export default CreateTripPage;