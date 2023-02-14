import PropTypes from 'prop-types';
import { Item, Button } from './RenderContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

export const RenderContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizeFilter = filter.toLowerCase();
  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
  console.log(contacts);

  return (
    <ul>
      {visibleContact.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            delete
          </Button>
        </Item>
      ))}
    </ul>
  );
};

RenderContacts.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
