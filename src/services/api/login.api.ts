import httpClient from '../httpClient';
import { ILogin } from '@/types/ILogin';

export const apiLogin = (params: ILogin) => httpClient.post('/auth/login', params);
