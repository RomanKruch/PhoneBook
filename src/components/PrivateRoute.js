import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isLogged = useSelector(state => state.user.isLogged);

  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
