// import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
// import Filter from './Filter/Filter';
// import { RenderContacts } from './RenderContactsList/RenderContactsList';
import PropTypes from 'prop-types';
import { Container } from './App.styled';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";


export function App() {

    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook" />
      {/* <ContactForm  /> */}
      {/* <Section title="Contacts" /> */}
      {/* <Filter /> */}
      {/* <RenderContacts /> */}
    </Container>
  );
}

App.prototype = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onSubmit: PropTypes.func,
};
