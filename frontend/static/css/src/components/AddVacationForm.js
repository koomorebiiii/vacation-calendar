import React, { useState } from 'react';

const AddVacationForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    reason: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="vacation-form">
      <h3>Добавить отпуск</h3>
      
      <label>
        Дата начала:
        <input 
          type="date" 
          name="startDate" 
          value={formData.startDate} 
          onChange={handleChange} 
          required 
        />
      </label>
      
      <label>
        Дата окончания:
        <input 
          type="date" 
          name="endDate" 
          value={formData.endDate} 
          onChange={handleChange} 
          required 
        />
      </label>
      
      <label>
        Причина:
        <input 
          type="text" 
          name="reason" 
          value={formData.reason} 
          onChange={handleChange} 
          required 
        />
      </label>
      
      <label>
        Отдел:
        <select 
          name="department" 
          value={formData.department} 
          onChange={handleChange} 
          required
        >
          <option value="">Выберите отдел</option>
          <option value="1">Отдел разработки</option>
          <option value="2">Отдел тестирования</option>
          <option value="3">Отдел маркетинга</option>
        </select>
      </label>
      
      <div className="form-buttons">
        <button type="submit">Добавить</button>
        <button type="button" onClick={onCancel}>Отмена</button>
      </div>
    </form>
  );
};

export default AddVacationForm;
