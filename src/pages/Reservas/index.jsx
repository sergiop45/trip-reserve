import React from 'react';
import {MdDelete} from 'react-icons/md';
import './style.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Reservas = () => {
  const reservas = useSelector(state => state.reserve);
  console.log("minhas reservas: ",reservas)

  return (
    <div>
      <h1>Voce solicitou {reservas.length} reserva</h1>

      {reservas.length > 0 ? reservas.map((reserva) => {
        return(
        <div className='reservas' key={reserva.id}>
        
          <img src={reserva.image} alt="" />
          <strong>{reserva.title}</strong>
          <span>Quantidade: {reserva.amount}</span>
          <button onClick={() => {}}> <MdDelete size={20} color="#191919" /></button>

      
        </div>
        )
      }): <p>Carregando...</p>}
      
    </div>
  )
}

export default Reservas;