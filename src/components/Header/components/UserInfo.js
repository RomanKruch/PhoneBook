import s from '../Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { onLogout } from '../../../redux/user/userOperations';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton } from '@mui/material';

const UserInfo = () => {
  const name = useSelector(state => state.user.userInfo.name);
  const dispatch = useDispatch();

  return (
    <div className={s.wrap}>
      <p className={s.name}>Hello {name}</p>
      <IconButton type="button" onClick={() => dispatch(onLogout())}>
        <ExitToAppIcon />
      </IconButton>
    </div>
  );
};

export default UserInfo;
