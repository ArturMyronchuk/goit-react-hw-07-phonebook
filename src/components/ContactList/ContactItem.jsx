import { Li, Button, Span } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Li>
      <Span>
        {contact.name}: {contact.phone}
      </Span>
      <Button
        className="delete"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </Button>
    </Li>
  );
};
