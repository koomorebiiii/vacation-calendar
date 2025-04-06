import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    try {
      const response = await axios.post('/api/auth/register', { name, email, password });
      alert('Аккаунт успешно создан!');
      window.location.href = '/login'; // Перенаправляем на страницу входа
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      alert('Ошибка при создании аккаунта');
    }
  };

  return (
    <div className="register-page">
      <h2>Создать аккаунт</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Повторите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Регистрация</button>
      </form>
    </div>
  );
};

export default RegisterPage;
