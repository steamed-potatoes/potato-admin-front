import React, { useEffect, useState } from 'react';
import { List, Avatar } from 'antd';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';
import Navbar from 'components/navbar/Navbar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 96%;
  height: 100%;
  margin: 2%;
`;

const MemberList = () => {
  const history = useHistory();
  const [members, setMembers] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await sendApi.getMemberList();
      setMembers(data.data);
    } catch (error) {
      alert(error.response.data.message);
      history.push('/');
    }
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 4,
          }}
          dataSource={members}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.profileUrl} />}
                title={item.name}
                description={item.major}
              />
              {item.email}
            </List.Item>
          )}
        />
      </Wrapper>
    </>
  );
};

export default MemberList;
