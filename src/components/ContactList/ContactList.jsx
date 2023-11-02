import { ContactItem } from './ContactItem';
import { Ul } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const onAddFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  return (
    <Ul>
      {onAddFilter().map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </Ul>
  );
};
