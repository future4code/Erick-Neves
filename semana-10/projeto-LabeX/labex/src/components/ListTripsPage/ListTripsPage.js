import React, { useEffect, useState } from "react";
import axios from 'axios'
// import { useProtectedPage } from "../Hooks/useProtectedPage";
import { baseUrl } from "../parameters";


const ListTripsPage = () => {
//   useProtectedPage()

  const [listTrips, setListTrips] = useState()
  const [tripDetails, setTripDetails] = useState({}) 
  const [goToDetails, setGoToDetails] = useState(false)

  useEffect(() =>{
    getTrips()
  }, [])

  const goTolistTrip = () =>{
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

  const getTripDetails = (tripId) =>{
    axios.get(`${baseUrl}/trip/${tripId}`, {
        headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) =>{
        console.log(res)
        setTripDetails(res.data.trip)
        setGoToDetails(true)
      })
      .catch((error) =>{
        alert('Não pegou detalhes.')
      })
    }

    const trispsRender = listTrips && <>{listTrips.map((trip) => {
        return (
          <div>
            <div>
              {trip.name}
            </div>
            {/* <div>
              {trip.planet}
            </div> */}
            {/* <div>
              {trip.description}
            </div> */}
            <div>
              <button onClick={() => getTripDetails(trip.id)}>Ver detalhes</button>
            </div>
            <hr></hr>
          </div>
        )
      })}</>
    
      return (
        <div>
          <h1>List trip page</h1>
          <div>
            {goToDetails ? 
            <>
                <div>
                    {tripDetails.name}
                </div>
                <div>
                    {tripDetails.planet}
                </div>
                <div>
                    {tripDetails.description}
                </div>
                <div>
                    {tripDetails.durationInDays}
                </div>
                <div>
                    {tripDetails.date}
                </div>
              <button onClick={goTolistTrip}>Voltar</button>
            </> : 
            <>
              {trispsRender}
            </>}
            
          </div>
        </div>
      )
    };
    
    export default ListTripsPage;