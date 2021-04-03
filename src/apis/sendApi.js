import axios from 'axios';
import localStorageService from 'libs/localStorageService';
import { AUTH_KEY } from 'constant';
import api from './common';

export default {
  sendGoogleAuth: async (req) => {
    return await api.send('/admin/v1/auth/google', req, 'post');
  },
  getOrganizationList: async () => {
    return await axios.get(`${AUTH_KEY.apiUrl}/admin/v1/organization/list`, {
      headers: {
        Authorization: `Bearer ${localStorageService.get('authToken')}`,
        'Content-Type': 'application/json',
      },
    });
  },
};
