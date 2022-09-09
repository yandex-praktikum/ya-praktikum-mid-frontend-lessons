import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './style.scss';

export default function App() {
  return (
    <div className="app">
      <nav className="app__navbar">
        <Link className="app__link" to="/">Главная</Link>
        <Link className="app__link" to="/about">О нас</Link>
        <Link className="app__link" to="/users">Пользователи</Link>
        <Link className="app__link" to="/another-page">Другая страница</Link>
      </nav>
      <Outlet />
    </div>
  );
}
