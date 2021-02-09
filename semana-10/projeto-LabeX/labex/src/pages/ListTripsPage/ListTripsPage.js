import React, { useState, useEffect } from "react";
import axios from 'axios'
import {
  ContainerTrips,
  ContainerMainTrips,
  ContainerInfoTrip,
  ContainerItem,
  BoxButton
} from './styled.js'
import { goToApplicationFormPage } from "../../Router/Coordinator.js";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import PageTitle from "../../components/PageTitle/index.js";

const ListTripsPage = () => {
  const history = useHistory();
  const [listTrips, setListTrips] = useState([])

  useEffect(() => {
    getListTrips()
  }, [])

  const getListTrips = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/erick-neves-epps/trips')
      .then((res) => {
        console.log(res.data.trips)
        setListTrips(res.data.trips)
      })
      .catch((error) => {
        alert('error')
      })
  }

  const listTripsRender = listTrips && listTrips.map((trip) => {
    return (
      <>
        <ContainerItem>
          <p><strong>Nome:</strong> {trip.name}</p>
          <p><strong>Descrição:</strong> {trip.description}</p>
          <p><strong>Partida:</strong> {trip.date}</p>
          <p><strong>Período:</strong> {trip.durationInDays} dias</p>
          <p><strong>Planeta:</strong> {trip.planet}</p>
        </ContainerItem>
      </>
    )
  })

  return (
    <ContainerTrips>
      <ContainerMainTrips>
        <PageTitle title={'Viagens Disponíveis'} />
        <ContainerInfoTrip>
          {listTripsRender}
        </ContainerInfoTrip>
        <BoxButton>
          <Button variant={'contained'} color={'primary'} type={'submit'} onClick={() => goToApplicationFormPage(history)}>
            Inscreva-se aqui !
          </Button>
        </BoxButton>
      </ContainerMainTrips>
    </ContainerTrips>

  )
};

export default ListTripsPage;