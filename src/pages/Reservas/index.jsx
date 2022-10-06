import React from 'react';
import {MdDelete} from 'react-icons/md';
import './style.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

const Reservas = () => {
  const reservas = useSelector(state => state.reserve);
  const dispatch = useDispatch();
  
  function handleDelete(id){
    
    dispatch({
      type: "DELETE_RESERVA",
      id
    });

  }

  return (
    <div>
      <h1>Voce solicitou {reservas.length} reserva</h1>

      {reservas.length > 0 ? reservas.map((reserva) => {
        return(
        <div className='reservas' key={reserva.id}>
        
          <img src={reserva.image} alt="" />
          <div>
          <strong>{reserva.title}</strong>
          <span>Quantidade: {reserva.amount}</span>
          <button onClick={() => { handleDelete(reserva.id)}}> <MdDelete size={20} color="red" /></button>
          </div>
      
        </div>
        )
      }): <p>Carregando...</p>}
      
    </div>
  )
}

export default Reservas;