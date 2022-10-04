import React from 'react';
import {MdDelete} from 'react-icons/md';
import './style.css';

const Reservas = () => {
  return (
    <div>
      <h1>Voce solicitou 1 reserva</h1>

      <div className='reservas'>
        
        <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="" />
        <strong>Viagem a Macéio 7 dias</strong>
        <span>Quantidade: 2</span>
        <button onClick={() => {}}> <MdDelete/></button>

      </div>
    </div>
  )
}

export default Reservas;