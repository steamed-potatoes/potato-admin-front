import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { GOOGLE_AUTH_URL } from 'constant';
import GoogleButton from './GoogleButton';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
`;

const Title = styled.p`
  margin: 0px;
  font-size: 56px;
`;

const SubTitle = styled.p`
  margin: 8px 0px 16px 0px;
  font-size: 16px;
`;

const LoginButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 24px 0px 0px 0px;
  padding: 16px 32px 16px 32px;
  width: 720px;

  border: 0px solid #ffffff;
  border-radius: 48px;
  background-color: #ffffff;
  box-shadow: 0px 24px 3px -16px #cfcece;

  color: black;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border: 1px solid #cfcece;
  }
  &:focus {
    outline: none;
  }
`;

const LoginButtonText = styled.p`
  display: block;
  margin: 16px 24px 16px 24px;
  font-size: 24px;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <Title>슬기로운 감자생활</Title>
      <SubTitle>
        이용하시려면 하단의 아이디로 로그인 하기를 클릭 하세오
      </SubTitle>
      <LoginButton href={GOOGLE_AUTH_URL}>
        <GoogleButton />
        <LoginButtonText>구글 아이디로 시작하기</LoginButtonText>
        <AiOutlineArrowRight size="40px" />
      </LoginButton>
    </LoginWrapper>
  );
};

export default Login;
