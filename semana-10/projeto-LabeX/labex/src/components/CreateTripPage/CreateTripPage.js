import React, { useState } from "react";

import axios from "axios";
// import { useProtectedPage } from "../Hooks/useProtectedPage";
import useForm from "../Hooks/useForm";
import { baseUrl } from "../parameters";


const CreateTripPage = () => {
//   useProtectedPage()

  const [form, onChange, clearFields] = useForm({
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
    <h1>Create page</h1>
    <div>
      <h2>Crie uma viagem</h2>
      <form onSubmit={createTrip}>
        <div>
          <input 
            name='name'
            value={form.name}
            onChange={onChange}
            id='nome'
            placeholder='Nome da viagem'
            type='text'
          />
        </div>

        <div>
          <input 
            name='date'
            value={form.date}
            onChange={onChange}
            id='date'
            placeholder='date'
            type='date'
          />
        </div>

        <div>
          <input 
            name='description'
            value={form.description}
            onChange={onChange}
            id='description'
            placeholder='descrição da vaigem'
            type='text'
          />
        </div>
        
        <div>
          <input 
            name='durationInDays'
            value={form.durationInDays}
            onChange={onChange}
            id='durationInDays'
            placeholder='duração'
            type='number'
          />
        </div>

        <div>
          <select
            name='planet'
            value={form.planet}
            onChange={onChange}
          >
            {planetList.map((planet) =>{
              return(
                <option value={planet}>{planet}</option>
              )
            })}
          </select>
        </div>

        <button type='submit'>Criar</button>
      </form>
    </div>
  </div>
  )
};

export default CreateTripPage;