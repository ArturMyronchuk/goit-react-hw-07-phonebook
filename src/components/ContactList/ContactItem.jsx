import { Li, Button, Span } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <Li>
      <Span>{name}</Span>
      <Span> {phone}</Span>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </Li>
  );
};
