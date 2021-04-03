import React, { useState } from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  const [current, setCurrent] = useState();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const onClickNav = (url) => {
    history.push(url);
  };
  return (
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
    </Menu>
  );
};

export default Navbar;
