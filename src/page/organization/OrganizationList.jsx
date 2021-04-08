import React, { useEffect } from 'react';
import { List, Avatar, Space, Select, Button } from 'antd';
import Navbar from 'components/navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { RETRIEVE_ORGANIZATION_REQUEST } from 'reducers/organization';

const { Option } = Select;

const IconText = ({ text }) => <Space>{text}</Space>;

const OrganizationList = () => {
  const dispatch = useDispatch();
  const { retrieveOrganization } = useSelector((state) => state.organization);

  useEffect(async () => {
    dispatch({
      type: RETRIEVE_ORGANIZATION_REQUEST,
    });
  }, []);

  return (
    <Navbar>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 4,
        }}
        dataSource={retrieveOrganization}
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
            <Select defaultValue={item.category}>
              <Option value="APPROVED_CIRCLE">인준그룹</Option>
              <Option value="NON_APPROVED_CIRCLE">비인준그룹</Option>
            </Select>
            <Button type="primary">카테고리 변경하기</Button>
          </List.Item>
        )}
      />
    </Navbar>
  );
};

export default OrganizationList;
