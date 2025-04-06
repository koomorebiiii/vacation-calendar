import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('authToken', token); // Сохраняем токен в localStorage
      alert('Успешный вход!');
      window.location.href = '/'; // Перенаправляем на главную страницу
    } catch (error) {
      console.error('Ошибка входа:', error);
      alert('Неверный email или пароль');
    }
  };

  return (
    <div className="login-page">
      <h2>Войти в аккаунт</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
