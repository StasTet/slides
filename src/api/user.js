import axios from 'axios';

const getUsers = () => axios.get('src/stubs/users.json');

export default {
    getUsers
};
