import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const { contacts, isLoading, error } = useSelector(selectContacts);

  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilterContact();

  return (
    <ul className={css['contact-list']}>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 &&
        visibleContacts.map(contact => {
          return (
            <li className={css['contact-list-item']} key={contact.id}>
              {contact.name}: {contact.phone}
              <div>
                <button
                  className={css['contact-list-button']}
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
