import React from 'react';



import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        
        <img src="https://raw.githubusercontent.com/xtnvila/img/main/logo.png" alt="El armario de Lupi" height="200px"></img>
      </p>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar