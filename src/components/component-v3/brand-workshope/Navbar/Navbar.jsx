import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='container'>
      <img src={logo} alt="Logo" className='logo' />
      <div className={isOpen ? 'open' : ''}>
      <ul className='mainlist'>
        <li className='network'>Agency</li>
        <li>About Us</li>
        <li className="active">Portfolio</li>
        <li>Services</li>
        <li>Colour Craft</li>
        <li><button className='btn'>Brand Assessment</button></li>
      </ul>
      </div>
     
      <div className='hamburger' onClick={toggleMenu}>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
      </div>
    </nav>
  );
}

export default Navbar;
