import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';
import { useDispatch } from 'react-redux/es/exports';

const Home = () => {
    const [trips, setTrips] = useState([]);
    const dispatch = useDispatch();

    async function getTrips() {
  
      let url = "http://localhost:3000/trips";
      await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
      })
      .catch((err) => {
        console.log(err)
      });
    }

    function addTrip(trip) {
      dispatch({
        type: "ADD_RESERVA",
        trip
      });
    }
  
    useEffect(() => {
  
      getTrips();
  
    },[]);

  return (
    <div className='home'>
        {trips.length > 0 ? trips.map((trip) => {
            return(
            <div key={trip.id} className='card'>
              <img src={trip.image} alt="" />
              <h4>{trip.title}</h4>
              {trip.status ? <p>Status: Disponivel</p>:<p>Status:Indisponivel</p>}
              <button onClick={() => { addTrip(trip)}}>Reservar</button>
            </div>)
        }) : <p>Carregando...</p>}
      
    </div>
  )
}

export default Home