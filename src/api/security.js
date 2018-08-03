import axios from 'axios';
import find from 'lodash/find';
// const login = (credentials) => axios.post('src/fakeServer/login.js', credentials);
// const logout = () => axios.post('/security/logout');


const login = (credentials) => {
    return fetch('/src/stubs/users.json')
        .then(result => result.json())
        .then((data) => {
            const { login, password } = credentials;
            const user = find(data.users, _user => _user.login === login && _user.password === password);
            
            console.log(user);
            // data.users.forEach((user) => {
            //     if (user.login === credentials.login && user.password === credentials.password) {
            //         return user;
            //     }
            // });
        })
        .catch(console.error);
};

export default {
  login,
//   logout
};
