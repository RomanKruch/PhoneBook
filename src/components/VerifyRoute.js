import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VerifyRoute = () => {
  const isVerifying = useSelector(state => state.user.isVerifying);

  return isVerifying ? <Navigate to="/verify" /> : <Outlet />;
};

export default VerifyRoute;
