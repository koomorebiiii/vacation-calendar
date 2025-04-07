import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Временные данные пользователя для демонстрации
  const isLoggedIn = true;
  const userEmail = "user@example.com";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">Система отпусков</Link>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <>
            <Link to="/profile" className="navbar-link">Личный кабинет</Link>
            <span className="navbar-email">{userEmail}</span>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Вход</Link>
            <Link to="/register" className="navbar-link">Регистрация</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
