import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import Filter from './Filter/Filter';
import { RenderContacts } from './RenderContactsList/RenderContactsList';
import PropTypes from 'prop-types';
import { Container } from './App.styled';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getContacts } from "redux/selectors";

export function App() {

    const dispatch = useDispatch();
  // Получаем части состояния
  const { items, isLoading, error } = useSelector(getContacts);
  // Вызываем операцию
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      <Section title="Phonebook" />
      <ContactForm  />
      <Section title="Contacts" />
      <Filter />
      <RenderContacts />
    </Container>
  );
}

App.prototype = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onSubmit: PropTypes.func,
};
