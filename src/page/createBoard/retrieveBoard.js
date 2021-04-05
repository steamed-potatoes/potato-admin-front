import Navbar from 'components/navbar/Navbar';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'antd';
import DatePicker from 'react-datepicker';
import { RETRIEVE_BOARD_REQUEST } from '../../reducers/board';
import BoardCard from './boardCard';

const RetrieveBoard = () => {
  const dispatch = useDispatch();
  const { retrieveBoard } = useSelector((state) => state.board);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onSubmitForm = () => {
    return dispatch({
      type: RETRIEVE_BOARD_REQUEST,
      data: {
        startDate: startDate.toISOString().substr(0, 10),
        endDate: endDate.toISOString().substr(0, 10),
      },
    });
  };

  return (
    <Navbar>
      <Form onFinish={onSubmitForm}>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <div>
          <Button type="primary" htmlType="submit">
            날짜선택
          </Button>
        </div>
      </Form>
      {/* <List
        itemLayout="vertical"
        size="large"
        pagination={{ pageSize: 5 }}
        dataSource={retrieveBoard}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              title={item.title}
              description={item.content}
              content={item.startDateTime}
            />
          </List.Item>
        )}
      /> */}
      {retrieveBoard.map((item) => (
        <BoardCard key={item.id} board={item} />
      ))}
    </Navbar>
  );
};

export default RetrieveBoard;
