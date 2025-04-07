import React from 'react';
import Profile from '../components/Profile';
import Modal from '../components/Modal';
import AddVacationForm from '../components/AddVacationForm';

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Временные данные пользователя для демонстрации
  const [user, setUser] = useState({
    email: 'user@example.com',
    name: 'Иван',
    surname: 'Иванов',
    middlename: 'Иванович',
    position: 'Разработчик',
    nextVacation: {
      start: '2025-07-15',
      end: '2025-07-30',
    },
  });

  const handleUpdate = (updatedData) => {
    setUser({
      ...user,
      ...updatedData,
    });
  };

  const handleAddVacation = (vacationData) => {
    console.log('Добавлен отпуск:', vacationData);
    setIsModalOpen(false);
  };

  return (
    <div className="profile-page">
      <Profile user={user} onUpdate={handleUpdate} />
      
      <button 
        className="add-vacation-btn" 
        onClick={() => setIsModalOpen(true)}
      >
        Добавить отпуск
      </button>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddVacationForm 
          onSubmit={handleAddVacation} 
          onCancel={() => setIsModalOpen(false)} 
        />
      </Modal>
    </div>
  );
};

export default ProfilePage;
