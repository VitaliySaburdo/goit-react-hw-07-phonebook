import PropTypes from 'prop-types';
import { Item, Button, Image, List } from './RenderContactList.styled';
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

  return (
    <List>
      {visibleContact.map(contact => (
        <Item key={contact.id}>
          <Image src={contact.avatar} alt={contact.name}></Image>
          {contact.name}: {contact.number}
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            delete
          </Button>
        </Item>
      ))}
    </List>
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
