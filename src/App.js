import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Home from './pages/Home';
import PhoneBook from './pages/PhoneBook';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Error from './pages/Error';
import VerifyPage from './pages/VerifyPage';
import PrivateRoute from './components/PrivateRoute';
import VerifyRoute from './components/VerifyRoute';
import PublicRoute from './components/PublicRoute';
import { onRefresh } from './redux/user/userOperations';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import 'react-notifications/lib/notifications.css';
import { Skeleton } from '@mui/material';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.user.isRefreshing);

  useEffect(() => {
    dispatch(onRefresh());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={80}
            animation={'wave'}
            sx={{ margin: '0 0 80px' }}
          />

          <Skeleton
            variant="text"
            width={190}
            height={55}
            animation={'wave'}
            sx={{ margin: '0 auto 10px' }}
          />

          <Skeleton
            variant="rounded"
            width={360}
            height={175}
            animation={'wave'}
            sx={{ margin: '0 auto 10px' }}
          />

          <Skeleton
            variant="text"
            width={150}
            height={30}
            animation={'wave'}
            sx={{ margin: '0 auto 10px' }}
          />
          <Skeleton
            variant="text"
            width={250}
            height={60}
            animation={'wave'}
            sx={{ margin: '0 auto 10px' }}
          />
        </>
      ) : (
        <>
          <Header />

          <main>
            <Routes>
              <Route path="*" element={<Error />} />

              <Route element={<PrivateRoute />}>
                <Route path="/phoneBook" element={<PhoneBook />} />
              </Route>

              <Route element={<VerifyRoute />}>
                <Route path="/signUp" element={<SignUp />} />
              </Route>

              <Route element={<PublicRoute />}>
                <Route path="/verify" element={<VerifyPage />} />

                <Route path="/login" element={<Login />} />

                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </main>
        </>
      )}

      <NotificationContainer />
    </>
  );
}

export default App;
