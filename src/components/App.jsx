// import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
// import Filter from './Filter/Filter';
// import { RenderContacts } from './RenderContactsList/RenderContactsList';
import PropTypes from 'prop-types';
import { Container } from './App.styled';
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";


export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook" />
      {/* <ContactForm  /> */}
      {/* <Section title="Contacts" /> */}
      {/* <Filter /> */}
      {isLoading && !error && <b>Request in progress...</b>}
      {/* <RenderContacts /> */}
    </Container>
  );
}

App.prototype = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onSubmit: PropTypes.func,
};
