import api from './common';

export default {
  sendGoogleAuth: async (req) => {
    return await api.send('/admin/v1/auth/google', req, 'post');
  },
};
