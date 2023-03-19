import { useSelector, useDispatch } from 'react-redux';
import { filterAction } from '../../redux/filter/filterAction';
import { TextField } from '@mui/material';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(filterAction(e.target.value));
  };

  return (
    <>
      <TextField
        label="Find contact by name"
        value={filter}
        onChange={onChange}
        type="text"
        variant="outlined"
      />
    </>
  );
};

export default Filter;
