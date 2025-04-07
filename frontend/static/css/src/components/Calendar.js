import React, { useState } from 'react';
import './Calendar.css';

const Calendar = ({ month, year, vacations, onMonthChange }) => {
  // Генерация дней месяца
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Обработчики изменения месяца/года
  const handlePrevMonth = () => {
    const newMonth = month === 0 ? 11 : month - 1;
    const newYear = month === 0 ? year - 1 : year;
    onMonthChange(newMonth, newYear);
  };

  const handleNextMonth = () => {
    const newMonth = month === 11 ? 0 : month + 1;
    const newYear = month === 11 ? year + 1 : year;
    onMonthChange(newMonth, newYear);
  };

  // Временные данные для демонстрации
  const employees = [
    { id: 1, name: "Иванов И.И.", vacations: [{ start: 5, end: 10 }] },
    { id: 2, name: "Петров П.П.", vacations: [{ start: 8, end: 15 }] },
    { id: 3, name: "Сидоров С.С.", vacations: [{ start: 20, end: 25 }] },
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>{`${month + 1}/${year}`}</h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      
      <div className="calendar-grid">
        {/* Заголовки дней */}
        <div className="calendar-row header">
          <div className="calendar-cell employee-name">Сотрудник</div>
          {days.map(day => (
            <div key={day} className="calendar-cell day-header">{day}</div>
          ))}
        </div>
        
        {/* Строки с сотрудниками */}
        {employees.map(employee => (
          <div key={employee.id} className="calendar-row">
            <div className="calendar-cell employee-name">{employee.name}</div>
            {days.map(day => {
              const isVacation = employee.vacations.some(v => 
                day >= v.start && day <= v.end
              );
              return (
                <div 
                  key={day} 
                  className={`calendar-cell day ${isVacation ? 'vacation' : ''}`}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
