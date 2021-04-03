import React, { useEffect, useState } from 'react';
import { List, Avatar, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import sendApi from 'apis/sendApi';
import Navbar from 'components/navbar/Navbar';

const IconText = ({ text }) => <Space>{text}</Space>;

const OrganizationList = () => {
  const history = useHistory();
  const [organization, setOrganization] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await sendApi.getOrganizationList();
      setOrganization(data.data);
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
          pageSize: 4,
        }}
        dataSource={organization}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <IconText
                text={`${item.membersCount}명 참여중`}
                key="list-vertical-star-o"
              />,
            ]}
            extra={<img width={100} alt="logo" src={item.profileUrl} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.profileUrl} />}
              title={item.name}
              description={item.subDomain}
            />
            {item.description}
          </List.Item>
        )}
      />
    </Navbar>
  );
};

export default OrganizationList;
