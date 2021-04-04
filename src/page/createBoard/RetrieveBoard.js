import React, { useState } from 'react';
import { Button, Form, List } from 'antd';
import DatePicker from 'react-datepicker';
import { useHistory } from 'react-router-dom';
import sendApi from 'apis/sendApi';
import Navbar from 'components/navbar/Navbar';

const getDay = () => {};

const CreateBoardForm = () => {
  const history = useHistory();
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  const [boardList, setBoardList] = useState([]);

  const onSubmitForm = async () => {
    try {
      console.log(startDateTime, endDateTime);
      const { data } = sendApi.getAdminBoardList(startDateTime, endDateTime);
      setBoardList(data.data);
    } catch (error) {
      alert('게시글 불러오는데 애러 발생');
      history.push('/retrieveBoard');
    }
    // return await sendApi
    //   .getAdminBoardList(startDateTime, endDateTime)
    //   .then((response) => {
    //     setBoardList(response.data.data);
    //   })
    //   .catch(() => {
    //     alert('에러발생');
    //   });
  };

  return (
    <Navbar>
      <div>
        <Form onFinish={onSubmitForm}>
          <div>
            <DatePicker
              selected={startDateTime}
              dateFormat="yyyy.MM.dd"
              onChange={(date) => setStartDateTime(date)}
            />
          </div>
          <div>
            <DatePicker
              selected={endDateTime}
              dateFormat="yyyy.MM.dd"
              onChange={(date) => setEndDateTime(date)}
            />
          </div>
          <div>
            <Button type="primary" htmlType="submit">
              게시글 조회
            </Button>
          </div>
        </Form>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{ pageSize: 4 }}
          dataSource={boardList}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta>{item.description}</List.Item.Meta>
            </List.Item>
          )}
        />
      </div>
    </Navbar>
  );
};

export default CreateBoardForm;
