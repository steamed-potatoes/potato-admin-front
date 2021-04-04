import React from 'react';
import { List } from 'antd';
// import { useHistory } from 'react-router-dom';
// import sendApi from 'apis/sendApi';
// const IconText = ({ text }) => <Space>{text}</Space>;

const BoardNow = ({ board }) => {
  // const history = useHistory();

  // useEffect(async () => {
  //   try {
  //     const { data } = await sendApi.getOrganizationList();
  //   } catch (error) {
  //     history.push('/');
  //   }
  // }, []);

  return (
    <div>
      <List>{board}</List>
    </div>
  );
};

export default BoardNow;
