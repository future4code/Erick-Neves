import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { baseUrl } from "../../Parameters/parameters";
// import PageTitle from "../PageTitle";
import TripDetailPage from "../TripDetailPage/index";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { goToAdmPage } from "../../Router/Coordinator";
import { BoxButton, ContainerMainTrips, ContainerInfoTrip, DelButton, DetailButton, BoxTripListPage, BoxTripListAdm } from "./styled";
import PageTitle from "../../components/PageTitle";


const ListTripsAdmPage = () => {
  useProtectedPage()

  const [listTrips, setListTrips] = useState()
  const [tripDetails, setTripDetails] = useState({})
  const [goToDetails, setGoToDetails] = useState(false)
  const [tripId, setTripId] = useState('')

  useEffect(() => {
    getTrips()
  }, [])

  const goTolistTrip = () => {
    setGoToDetails(false)
  }

  const history = useHistory()

  const getTrips = () => {
    axios.get(`${baseUrl}/trips`)
      .then((res) => {
        setListTrips(res.data.trips)
      })
      .catch((error) => {
        alert('Não pegou as viagens.')
      })
  }

  const getTripDetails = (tripId) => {
    axios.get(`${baseUrl}/trip/${tripId}`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res)
        setTripDetails(res.data.trip)
        setGoToDetails(true)
      })
      .catch((error) => {
        alert('Não pegou detalhes.')
      })
  }

  const delTrips = (tripId) => {
    axios.delete(`${baseUrl}/trips/${tripId}`)
      .then((res) => {
        alert('Viagem deletada')
      })
      .catch((erro) => {
        alert('não foi possível deletar viagem.')
      })
  }

  const trispsRender = listTrips && <>{listTrips.map((trip) => {
    return (
      <div>
        <ContainerMainTrips>
            <ContainerInfoTrip>
              {trip.name}
            </ContainerInfoTrip>
            <BoxButton>
              <DetailButton onClick={() => getTripDetails(trip.id)}>Ver detalhes</DetailButton>
              <DelButton onClick={() => delTrips(trip.id)}>Deletar viagem</DelButton>
            </BoxButton>
        </ContainerMainTrips>
        
      </div>
    )
  })}</>


  return (
    <div>
      {goToDetails ?
        <>{tripDetails && <TripDetailPage
          tripDetails={tripDetails}
          goTolistTrip={goTolistTrip}
          getTripDetails={getTripDetails}
          tripId={tripId}
        />}</> :
        <BoxTripListAdm>
          <PageTitle title={'Gerenciamento de viagens'} />
          {trispsRender}
          <BoxButton>
            <Button variant={'contained'} type={'submit'} onClick={() => goToAdmPage(history)}>Voltar</Button>
          </BoxButton>
        </BoxTripListAdm>
      }
    </div>
  )
};

export default ListTripsAdmPage;