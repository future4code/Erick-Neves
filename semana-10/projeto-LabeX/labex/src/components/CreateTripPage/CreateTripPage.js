import React, { useState } from "react";

import axios from "axios";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import useForm from "../Hooks/useForm";
import { baseUrl } from "../parameters";
import PageTitle from "../PageTitle";
import { FormContainer } from "../ApplicationFormPage/styled";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";


const CreateTripPage = () => {
  useProtectedPage()

  const [form, onChangeInput, clearFields] = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: '',
  })
  
  const planetList = [
    'Terra', 'Vênus', 'Saturno', 'Marte',  'Júpter', 'Urano', 'Netuno', 'Mércurio'
  ]

  const createTrip = (event) =>{
    event.preventDefault()
    clearFields()
    axios.post(`${baseUrl}`, form, {
      headers:{
        auth: localStorage.getItem("token"),
      }
    })
    .then((res) =>{
      alert('Viagem criada')
    })
    .catch((error) =>{
      alert('Não criou a viagem')
    })
  }
  
  return (
    <div>
        <PageTitle title={'Criar viagem'} />
        <FormContainer onSubmit={createTrip}>
            
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
                {planetList.map((planet) =>{
                return(
                    <MenuItem value={planet}>{planet}</MenuItem>
                )
                })}
            </Select>
            </FormControl>
            <Button variant={'contained'} color="primary" type='submit'>Criar</Button>
        </FormContainer>
    </div>
  )
};

export default CreateTripPage;