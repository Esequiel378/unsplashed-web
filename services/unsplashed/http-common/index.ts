import axios from 'axios';

const URL = process.env.UNSPLASHED_URL ?? 'http://localhost/api';
const SERVICE_URL = `${URL}/unsplash`;

console.log(URL);
console.log(SERVICE_URL);

const http = axios.create({
  baseURL: SERVICE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;
