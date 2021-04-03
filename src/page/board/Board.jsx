import React, { useEffect, useState } from 'react';
import { List, Avatar, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';

const IconText = ({ text }) => <Space>{text}</Space>;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 80vw;
  height: 100vh;
  margin: 0 10%;
`;

const Board = () => {
  const history = useHistory();
  const [organization, setOrganization] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await sendApi.getOrganizationList();
      setOrganization(data.data);
    } catch (error) {
      alert('그룹을 불러오는데 에러가 발생하였습니다.');
      history.push('/');
    }
  }, []);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Board;
