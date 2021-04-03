import React from 'react';
import { List } from 'antd';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
// import sendApi from 'apis/sendApi';
// const IconText = ({ text }) => <Space>{text}</Space>;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 80vw;
  height: 100vh;
  margin: 0 10%;
`;

const Board = ({ boardList }) => {
  // const history = useHistory();

  // useEffect(async () => {
  //   try {
  //     const { data } = await sendApi.getOrganizationList();
  //     setOrganization(data.data);
  //   } catch (error) {
  //     history.push('/');
  //   }
  // }, []);

  return (
    <Wrapper>
      <List>{boardList}</List>
    </Wrapper>
  );
};

export default Board;
