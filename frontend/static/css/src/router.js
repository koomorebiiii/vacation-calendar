import { Navigate } from 'react-router-dom';

// Проверка аутентификации пользователя
const isAuthenticated = () => {
  // Здесь можно проверить localStorage или cookies
  const token = localStorage.getItem('authToken');
  return !!token; // Если токен существует, пользователь аутентифицирован
};

// Защищенный маршрут
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
