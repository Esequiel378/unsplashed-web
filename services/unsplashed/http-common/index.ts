import axios from 'axios';

const URL = process.env.UNSPLASHED_URL ?? 'http://localhost:4000/api/unsplash';

const http = axios.create({
  baseURL: URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;
