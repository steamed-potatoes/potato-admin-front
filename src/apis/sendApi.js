import api from './common';

export default {
  sendGoogleAuth: async (req) => {
    return await api.send('/api/v1/auth/google', req, 'post');
  },
  signUpMember: async (req) => {
    return await api.send('/api/v1/member', req, 'post');
  },
};
