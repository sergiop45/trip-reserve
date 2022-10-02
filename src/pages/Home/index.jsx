import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';

const Home = () => {
    const [trips, setTrips] = useState([]);

    async function getTrips() {
  
      let url = "http://localhost:3333/trips";
      await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
      })
      .catch((err) => alert("Erro no Fetch-> "+err));
    }
  
    useEffect(() => {
  
      getTrips();
  
    },[])
  return (
    <div className='home'>
        {trips.length > 0 ? trips.map((trip) => {
            return(<div key={trip.id} className='card'>
              <img src={trip.image} alt="" />
              <p>{trip.title}</p>
              <p>{trip.status ? <p>Disponivel</p>:<p>Indisponivel</p>}</p>
              <button>Reservar</button>
            </div>)
        }) : <p>Carregando...</p>}
      
    </div>
  )
}

export default Home