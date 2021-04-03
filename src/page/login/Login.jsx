import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { GOOGLE_AUTH_URL } from 'constant';
import GoogleButton from 'components/google/GoogleButton';
import backgroundImage from 'assets/img/BackgroundImg.png';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.p`
  margin: 0px;
  font-size: 40px;
  margin-bottom: 8px;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-size: 16px;
`;

const LoginButton = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 24px 0px 0px 0px;
  padding: 16px;
  width: 100%;
  max-width: 720px;

  border: 0px solid #ffffff;
  border-radius: 48px;
  background-color: #ffffff;
  box-shadow: 0px 24px 3px -16px #cfcece;

  color: black;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border: 2px solid #cfcece;
  }
`;

const LoginButtonText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;
  font-size: 20px;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <Title>슬기로운 감자생활</Title>
      <SubTitle>관리자 서버입니다.</SubTitle>
      <LoginButton href={GOOGLE_AUTH_URL}>
        <GoogleButton />
        <LoginButtonText>구글 계정으로 시작하기</LoginButtonText>
        <AiOutlineArrowRight size="40px" />
      </LoginButton>
    </LoginWrapper>
  );
};

export default Login;
