import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { baseUrl } from "../parameters";
// import PageTitle from "../PageTitle";
import TripDetailPage from "../TripDetailPage/index";


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
        <div>
          {trip.name}
        </div>
        <div>
          <button onClick={() => getTripDetails(trip.id)}>Ver detalhes</button>
          <button onClick={() => delTrips(trip.id)}>Deletar</button>
        </div>
        <hr></hr>
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
        <>{trispsRender}</>}
    </div>
  )
};

export default ListTripsAdmPage;