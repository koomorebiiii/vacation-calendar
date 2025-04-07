import React, { useState } from 'react';

const Profile = ({ user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    surname: user.surname,
    middlename: user.middlename,
    position: user.position,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h2>Личный кабинет</h2>
      <div className="profile-info">
        <p><strong>Email:</strong> {user.email}</p>
        
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <label>
              Имя:
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
              />
            </label>
            <label>
              Фамилия:
              <input 
                type="text" 
                name="surname" 
                value={formData.surname} 
                onChange={handleChange} 
              />
            </label>
            <label>
              Отчество:
              <input 
                type="text" 
                name="middlename" 
                value={formData.middlename} 
                onChange={handleChange} 
              />
            </label>
            <label>
              Должность:
              <input 
                type="text" 
                name="position" 
                value={formData.position} 
                onChange={handleChange} 
              />
            </label>
            <button type="submit">Сохранить</button>
            <button type="button" onClick={() => setIsEditing(false)}>Отмена</button>
          </form>
        ) : (
          <>
            <p><strong>ФИО:</strong> {`${user.surname} ${user.name} ${user.middlename}`}</p>
            <p><strong>Должность:</strong> {user.position || 'Не указана'}</p>
            <button onClick={() => setIsEditing(true)}>Редактировать</button>
          </>
        )}
      </div>
      
      <div className="profile-vacations">
        <h3>Ближайший отпуск</h3>
        {user.nextVacation ? (
          <p>{`${user.nextVacation.start} - ${user.nextVacation.end}`}</p>
        ) : (
          <p>Нет запланированных отпусков</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
