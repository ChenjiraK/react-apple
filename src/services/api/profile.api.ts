import httpClient from '../httpClient';
import { IProfile } from '@/types/IAuth';

export const apiGetProfile = () => httpClient.get('/auth/me');
export const apiUpdateProfile = (params: IProfile) => httpClient.post('/auth/register', params);
