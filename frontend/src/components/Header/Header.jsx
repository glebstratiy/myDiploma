import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import classes from './Header.module.css';


const Header = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false); 

  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedOut(true);
    window.location.href = '/'; 
  };

  if (isLoggedOut) {
    return null; 
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <a href="/" className={classes.logo_text}><h2>Oxydent</h2></a>
      </div>
      <div className={classes.auth}>
        <NavLink to='/appointment'>
          <Button variant="contained" color="primary" sx={{ marginLeft: "10px" }}>
            Записатися
          </Button>
        </NavLink>
        {token ? (
          <Button variant="contained" color="primary" sx={{ marginLeft: "10px" }} onClick={handleLogout}>
            Вийти
          </Button>
        ) : (
          <NavLink to='/login'>
            <Button href="/" variant="contained" color="primary" sx={{ marginLeft: "10px" }}>
              Вхід
            </Button>
          </NavLink>
        )}
        <NavLink to='/registration'>
          <Button variant="contained" color="primary" sx={{ marginLeft: "10px" }}>
            Реєстрація
          </Button>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
