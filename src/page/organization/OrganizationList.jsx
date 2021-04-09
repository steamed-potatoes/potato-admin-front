import React, { useEffect } from 'react';
import { List, Avatar, Space } from 'antd';
import Navbar from 'components/navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { RETRIEVE_ORGANIZATION_REQUEST } from 'reducers/organization';

import OrganizationCategory from './organizationCategory';

const IconText = ({ text }) => <Space>{text}</Space>;

const OrganizationList = () => {
  const dispatch = useDispatch();
  const { retrieveOrganization, changeCategoryError } = useSelector(
    (state) => state.organization
  );

  useEffect(() => {
    dispatch({
      type: RETRIEVE_ORGANIZATION_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (changeCategoryError) {
      alert(changeCategoryError);
    }
  }, [changeCategoryError]);

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
            <div>{item.description}</div>
            <div>{item.category}</div>
            <OrganizationCategory item={item} />
          </List.Item>
        )}
      />
    </Navbar>
  );
};

export default OrganizationList;
