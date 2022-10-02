import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <header className='navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/reservas">Reservas</Link></li>
        <li><Link to='/reservas'>
            <div>
                <strong>Minhas Reservas</strong>
                <p>0 Reservas</p>
            </div>    
        </Link></li>
    </header>
  )
}

export default Header