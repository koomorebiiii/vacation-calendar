import React from 'react';

const DepartmentFilter = ({ selectedDepartment, onSelect }) => {
  const departments = [
    { id: 'all', name: 'Все отделы' },
    { id: '1', name: 'Отдел разработки' },
    { id: '2', name: 'Отдел тестирования' },
    { id: '3', name: 'Отдел маркетинга' },
  ];

  return (
    <div className="department-filter">
      <label>
        Фильтр по отделам:
        <select 
          value={selectedDepartment} 
          onChange={(e) => onSelect(e.target.value)}
        >
          {departments.map(dept => (
            <option key={dept.id} value={dept.id}>{dept.name}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default DepartmentFilter;
