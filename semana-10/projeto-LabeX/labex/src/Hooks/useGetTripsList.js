import { useState, useEffect } from "react"
import axios from "axios"
import { baseUrl } from "../Parameters/parameters"

export const useGetTripsList = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/trips`)
    .then((response) => {
      setTrips(response.data.trips)
    })
  }, [])

  return trips
}