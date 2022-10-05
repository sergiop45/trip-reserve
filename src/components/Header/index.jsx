import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useSelector } from 'react-redux/es/exports';

const Header = () => {
  const reserve_size = useSelector(state => state.reserve);
  return (
    <header className='navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/reservas">Reservas</Link></li>
        <li><Link to='/reservas'>
            <div>
                <strong>Minhas Reservas</strong>
                <p>{reserve_size.length} Reservas</p>
            </div>    
        </Link></li>
    </header>
  )
}

export default Header