import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import querystring from 'querystring';
import sendApi from 'apis/sendApi';
import { AUTH_KEY } from 'constant';
import localStorageService from 'libs/localStorageService';

const GoogleCallback = () => {
  const history = useHistory();

  const sendToken = async (code) => {
    try {
      const { data } = await sendApi.sendGoogleAuth({
        code,
        redirectUri: AUTH_KEY.google.redirectUri,
      });

      localStorageService.set('authToken', data.data);
      history.push('/');
    } catch (error) {
      alert('에러가 발생');
      history.push('/Login');
    }
  };

  useEffect(async () => {
    if (!window.location.search) {
      return;
    }
    const { code } = querystring.parse(window.location.search);

    sendToken(code);
  }, []);
  return <div>Google Login</div>;
};

export default GoogleCallback;
