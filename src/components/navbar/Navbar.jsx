import React, { useState } from 'react';
import { Menu, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';

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
    <div>
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
      <Row gutter={8}>
        <Col xs={24} md={6}>
          몰랑
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          오른쪽
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
