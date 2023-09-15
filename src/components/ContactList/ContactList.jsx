import { ContactItem } from './ContactItem';
import { Ul } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const onAddFilter = () => {
    const lowerCaseFilter = filter.toLowerCase().trim();

    const uniqueNames = {};

    return contacts
      .filter(contact => {
        const lowerCaseName = contact.name.toLowerCase();
        if (!uniqueNames[lowerCaseName]) {
          uniqueNames[lowerCaseName] = true;
          return true;
        }
        return false;
      })
      .filter(contact => contact.name.toLowerCase().includes(lowerCaseFilter));
  };
  return (
    <Ul>
      {onAddFilter().map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </Ul>
  );
};
