import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        placeholder="Search by name"
        onChange={evt => handleFilterChange(evt.target.value)}
      />
    </div>
  );
};
