import React, { useEffect, useState } from 'react';
import { List, Avatar } from 'antd';
import { useHistory } from 'react-router-dom';
import sendApi from 'apis/sendApi';
import Navbar from 'components/navbar/Navbar';

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
    <Navbar>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 5,
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
    </Navbar>
  );
};

export default MemberList;
