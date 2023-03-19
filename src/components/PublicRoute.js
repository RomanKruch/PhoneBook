import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
  const isLogged = useSelector(state => state.user.isLogged);

  return isLogged ? <Navigate to="/phoneBook" /> : <Outlet />;
};

export default PublicRoute;
