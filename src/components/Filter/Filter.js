import React from 'react';
import { Input, Label } from './Filter.styled';
import { findContact } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilter = e => {
    dispatch(findContact(e.target.value));
  };

  return (
    <Label>
      Find contact by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};

export default Filter;
