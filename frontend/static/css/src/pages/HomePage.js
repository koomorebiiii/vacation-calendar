import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import DepartmentFilter from '../components/DepartmentFilter';
import Modal from '../components/Modal';
import AddVacationForm from '../components/AddVacationForm';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const handleMonthChange = (newMonth, newYear) => {
    setCurrentDate(new Date(newYear, newMonth, 1));
  };

  const handleAddVacation = (vacationData) => {
    console.log('Добавлен отпуск:', vacationData);
    setIsModalOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    // В реальном приложении здесь будет поиск и перенаправление
    console.log('Поиск:', query);
  };

  return (
    <div className="home-page">
      <div className="controls">
        <DepartmentFilter 
          selectedDepartment={selectedDepartment} 
          onSelect={setSelectedDepartment} 
        />
        
        <button 
          className="add-vacation-btn" 
          onClick={() => setIsModalOpen(true)}
        >
          Добавить отпуск
        </button>
        
        <form onSubmit={handleSearch} className="search-form">
          <input 
            type="text" 
            name="search" 
            placeholder="Поиск по ФИО" 
          />
          <button type="submit">Найти</button>
        </form>
      </div>
      
      <Calendar 
        month={month} 
        year={year} 
        vacations={[]} 
        onMonthChange={handleMonthChange} 
      />
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddVacationForm 
          onSubmit={handleAddVacation} 
          onCancel={() => setIsModalOpen(false)} 
        />
      </Modal>
    </div>
  );
};

export default HomePage;
