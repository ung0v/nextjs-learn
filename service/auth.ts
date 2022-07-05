import { LoginPayload } from '@/models';
import axiosClient from './axiosClient';

export const authApi = {
  login(payLoad: LoginPayload) {
    return axiosClient.post('/login', payLoad);
  },
  logout() {
    return axiosClient.post('logout');
  },
  getProfile() {
    return axiosClient.get('/profile');
  },
};
