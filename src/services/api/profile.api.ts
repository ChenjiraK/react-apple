import httpClient from '../httpClient';
import { IProfile } from '@/types/IAuth';

export const apiGetProfile = (params: IProfile) =>
   httpClient.post('/auth/login', params);
export const apiUpdateProfile = (params: IProfile) =>
   httpClient.post('/auth/register', params);
