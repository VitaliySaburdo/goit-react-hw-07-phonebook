import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { RenderContacts } from './RenderContactsList/RenderContactsList';
import Filter from './Filter/Filter';
import PropTypes from 'prop-types';
import { Container } from './App.styled';

export function App() {
  return (
    <Container>
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
