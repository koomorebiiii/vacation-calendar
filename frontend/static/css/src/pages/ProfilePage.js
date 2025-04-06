import React from 'react';

const Calendar = ({ vacations, selectedDepartment }) => {
  // Фильтруем отпуска по выбранному отделу
  const filteredVacations = selectedDepartment
    ? vacations.filter(vacation => vacation.department === selectedDepartment)
    : vacations;

  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Отпуск</th>
          </tr>
        </thead>
        <tbody>
          {filteredVacations.map(vacation => (
            <tr key={vacation.id}>
              <td>{vacation.name}</td>
              <td>
                <div
                  className="vacation-bar"
                  style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}
                >
                  {/* Отображение даты отпуска */}
                  {vacation.fromDate} - {vacation.toDate}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
