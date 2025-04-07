import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    surname: '',
    middlename: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Валидация
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    
    // В реальном приложении здесь будет запрос к API
    console.log('Регистрация:', formData);
    
    // Перенаправление на главную страницу
    navigate('/');
  };

  return (
    <div className="auth-page">
      <h2>Регистрация</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </label>
        
        <label>
          Имя:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </label>
        
        <label>
          Фамилия:
          <input 
            type="text" 
            name="surname" 
            value={formData.surname} 
            onChange={handleChange} 
            required 
          />
        </label>
        
        <label>
          Отчество:
          <input 
            type="text" 
            name="middlename" 
            value={formData.middlename} 
            onChange={handleChange} 
            required 
          />
        </label>
        
        <label>
          Пароль:
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </label>
        
        <label>
          Подтвердите пароль:
          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />
        </label>
        
        <button type="submit">Зарегистрироваться</button>
      </form>
      
      <p>
        Уже есть аккаунт? <a href="/login">Войти</a>
      </p>
    </div>
  );
};

export default RegisterPage;
