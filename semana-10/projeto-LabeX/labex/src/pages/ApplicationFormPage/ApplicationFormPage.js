import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import axios from "axios";
import React from "react";
import useForm from "../../Hooks/useForm";
import { useGetTripsList } from "../../Hooks/useGetTripsList";
import PageTitle from "../../components/PageTitle";
import { baseUrl } from "../../Parameters/parameters";
import { ContainerPage, FormContainer } from "./styled";


const ApplicationFormPage = () => {
    const trips = useGetTripsList()
    const [form, onChangeInput, clearFields] = useForm({
        name: '',
        age: 0,
        applicationText: '',
        profession: '',
        country: '',
        trip: null
      })
      console.log(form)

    const onSubmitApplication = (event) => {
        event.preventDefault()
        console.log(form)
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }

        axios.post(`${baseUrl}/trips/${form.trip.id}/apply`, body)
        clearFields();
    }

    return (
        <ContainerPage>

        {/* basta que tenha o onsubmit no formcontainer desde que tenha type={'submit'} no button do form */}
            <FormContainer onSubmit={onSubmitApplication}>
                <PageTitle title={'Inscrever para viagem'} />
                <TextField
                    label={'Nome do candidato'}
                    type="text"
                    required
                    variant="outlined"
                    color="primary"
                    //abaixo daqui e parte da API
                    onChange={onChangeInput}
                    value={form['name']}
                    name={'name'}
                />
                <TextField
                    label={'Idade'}
                    type={'number'}
                    required
                    variant="outlined"
                    //abaixo daqui e parte da API
                    onChange={onChangeInput}
                    value={form['age']}
                    name={'age'}
                />
                <TextField
                    label={'Por que escolher você?'}
                    helperText="Explique com suas palavras em no min. 100 letras."
                    type="text"
                    required
                    variant="outlined"
                    //abaixo daqui e parte da API
                    onChange={onChangeInput}
                    value={form['applicationText']}
                    name={'applicationText'}
                />
                <TextField
                    label={'Profissão'}
                    type="text"
                    required
                    variant="outlined"
                    //abaixo daqui e parte da API
                    onChange={onChangeInput}
                    value={form['profession']}
                    name={'profession'}
                />
                <FormControl variant="outlined">
                    <InputLabel variant="outlined" id="select-paises">País de origem</InputLabel>
                    <Select
                        labelId="select-paises" id="select-paises"
                        variant="outlined"
                        type="select"
                        label="País de origem"
                        required
                        //abaixo daqui e parte da API
                        onChange={onChangeInput}
                        value={form['country']}
                        name={'country'}
                    >
                        <MenuItem value={'brasil'}>Brasil</MenuItem>
                        <MenuItem value={'argentina'}>Argentina</MenuItem>
                        <MenuItem value={'eua'}>Estados Unidos</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel variant="outlined" id="select-viagens">Viagens</InputLabel>
                    <Select
                        labelId="select-viagens"
                        variant="outlined"
                        type="select"
                        label="Viagens"
                        required
                        onChange={onChangeInput}
                        value={form['trip']}
                        name={'trip'}
                    >
                        {/* parte estatica para visualizaão remover */}
                        {/* <MenuItem value={'1'}>Mercúrio</MenuItem>
                        <MenuItem value={'2'}>Terra</MenuItem>
                        <MenuItem value={'3'}>Netuno</MenuItem> */}

                        {trips.map((trip) => {
            return <MenuItem value={trip}>{trip.name}</MenuItem>
          })}
                    </Select>
                </FormControl>
                <Button variant={'contained'} color={'primary'} type={'submit'}>Inscrever-se</Button>
            </FormContainer>


        </ContainerPage>
    )
};

export default ApplicationFormPage;