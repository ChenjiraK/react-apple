import httpClient from '../httpClient';
import { ILogin, IRegister } from '@/types/IAuth';

export const apiLogin = (params: ILogin) => httpClient.post('/auth/login', params);
export const apiRegister = (params: IRegister) => httpClient.post('/auth/register', params);
