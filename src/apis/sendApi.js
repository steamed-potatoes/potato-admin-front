import axios from 'axios';
import localStorageService from 'libs/localStorageService';
import { AUTH_KEY } from 'constant';

export default {
  sendGoogleAuth: async (req) => {
    return await axios.post(`${AUTH_KEY.adminUrl}/admin/v1/auth/google`, req);
  },
  getOrganizationList: async () => {
    return await axios.get(`${AUTH_KEY.apiUrl}/api/v1/organization/list`);
  },
  getMemberList: async () => {
    return await axios.get(`${AUTH_KEY.adminUrl}/admin/v1/member/list`, {
      headers: {
        Authorization: `Bearer ${localStorageService.get('authToken')}`,
        'Content-Type': 'application/json',
      },
    });
  },
  createBoard: async (title, content, startDateTime, endDateTime) => {
    return await axios.post(
      `${AUTH_KEY.adminUrl}/admin/v1/board`,
      {
        title,
        content,
        startDateTime,
        endDateTime,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorageService.get('authToken')}`,
          'Content-Type': 'application/json',
        },
      }
    );
  },
  getBoardList: async () => {
    return await axios.get(`${AUTH_KEY.apiUrl}/admin/v1/organization/list`, {
      headers: {
        Authorization: `Bearer ${localStorageService.get('authToken')}`,
        'Content-Type': 'application/json',
      },
    });
  },
  getAdminBoardList: async (startDate, endDate) => {
    return await axios.get(
      `${AUTH_KEY.apiUrl}/api/v1/schedule?startDate=${startDate}&endDate=${endDate}`
    );
  },
};
