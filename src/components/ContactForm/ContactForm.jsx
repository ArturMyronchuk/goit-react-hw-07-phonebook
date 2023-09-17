import { Button, Label, Form, InputName } from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = async evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;

    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      alert('Contact with this name already exists in the phonebook.');
      return;
    }

    try {
      await dispatch(addContact({ name: name, phone: phone })).unwrap();
      form.reset();
    } catch (error) {
      alert('Error while adding contact: ' + error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
      <Label htmlFor="name">Name</Label>
      <InputName
        type="text"
        name="name"
        className="input-name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">Phone Number</Label>
      <InputName
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit" className="submit">
        Add contact
      </Button>
    </Form>
  );
};
