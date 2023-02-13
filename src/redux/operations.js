import axios from 'axios';

axios.defaults.baseURL = 'https://63ea64d73363c8700368743e.mockapi.io';
const fetchContacts = () => async dispatch => {
  try {
    const response = await axios.get('/contacts');
  } catch (e) {}
};
