import httpClient from '../httpClient';

export const apiLogin = (params) => httpClient.post('/auth/login', params);
