import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://exam9contacts.firebaseio.com/'
    baseURL: 'https://contact-exam9.firebaseio.com/'
});

export default instance;