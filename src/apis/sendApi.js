import axios from 'axios';
import { AUTH_KEY } from 'constant';

export default {
  sendGoogleAuth: async (req) => {
    return await axios.post(`${AUTH_KEY.adminUrl}/admin/v1/auth/google`, req);
  },
  getOrganizationList: async () => {
    return await axios.get(`${AUTH_KEY.apiUrl}/api/v1/organization/list`);
  },
};
