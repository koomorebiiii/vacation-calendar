import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from '../components/Calendar';
import DepartmentFilter from '../components/DepartmentFilter';
import Modal from '../components/Modal';
import AddVacationForm from '../components/AddVacationForm';

const HomePage = () => {
  const [vacations, setVacations] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Получаем список отпусков
    axios.get('/api/vacations').then((response) => {
      setVacations(response.data);
    });

    // Получаем список отделов
    axios.get('/api/departments').then((response) => {
      setDepartments(response.data);
    });
  }, []);

  const handleAddVacation = async (formData) => {
    try {
      await axios.post('/api/vacations', formData);
      setShowModal(false); // Закрываем модальное окно
      alert('Отпуск успешно добавлен!');
      // Обновляем список отпусков
      const updatedVacations = [...vacations, formData];
      setVacations(updatedVacations);
    } catch (error) {
      console.error('Ошибка добавления отпуска:', error);
      alert('Не удалось добавить отпуск');
    }
  };

  return (
    <div className="home-page">
      <h1>Март, 2025 ▼</h1>
      <div className="controls">
        <input type="text" placeholder="Введите запрос" />
        <button onClick={() => setShowModal(true)}>+ Добавить информацию</button>
      </div>
      <DepartmentFilter departments={departments} selectedDepartment={selectedDepartment} onSelect={setSelectedDepartment} />
      <Calendar vacations={vacations} selectedDepartment={selectedDepartment} />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <AddVacationForm onSubmit={handleAddVacation} />
      </Modal>
    </div>
  );
};

export default HomePage;
