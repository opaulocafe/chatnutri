import axios from 'axios';

export const ApiManager = axios.create({
  baseURL: 'http://192.168.15.4:3333/',
  responseType: 'json',
  withCredentials: true,
});
