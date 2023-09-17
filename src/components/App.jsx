import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { Div } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      {isLoading && !error && <b>Request in progress...</b>}
      <div className="second-wrap">
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Div>
  );
};
