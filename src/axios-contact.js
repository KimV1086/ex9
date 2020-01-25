import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://exam9contacts.firebaseio.com/'
});

export default instance;