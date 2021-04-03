import React, { useState } from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 96%;
  height: 100%;
  margin: 2%;
`;

const Navbar = ({ children }) => {
  const history = useHistory();
  const [current, setCurrent] = useState();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const onClickNav = (url) => {
    history.push(url);
  };
  return (
    <Wrapper>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item
          key="members"
          onClick={() => {
            onClickNav('/members');
          }}
        >
          회원 관리
        </Menu.Item>
        <Menu.Item
          key="organizations"
          onClick={() => {
            onClickNav('/organizations');
          }}
        >
          그룹 관리
        </Menu.Item>
        <Menu.Item
          key="createBoard"
          onClick={() => {
            onClickNav('/createBoard');
          }}
        >
          공지 추가
        </Menu.Item>
      </Menu>
      {children}
    </Wrapper>
  );
};

export default Navbar;
