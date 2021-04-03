import React, { useState, useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import DatePicker from 'react-datepicker';
import sendApi from 'apis/sendApi';
import Navbar from 'components/navbar/Navbar';
import BoardList from './BoardList';

const CreateBoardForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  const [board, setBoard] = useState([]);

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  });

  const onChangeContent = useCallback((e) => {
    setContent(e.target.value);
  });

  const onSubmitForm = async () => {
    if (!title || !title.trim()) {
      return alert('제목을 작성해주세요');
    }
    return await sendApi
      .createBoard(title, content, startDateTime, endDateTime)
      .then((response) => {
        setBoard(response.data.data);
        setTitle('');
        setContent('');
      })
      .catch(() => {
        alert('에러발생');
      });
  };

  return (
    <div>
      <Navbar />
      <Form onFinish={onSubmitForm}>
        <div>
          <label htmlFor="title">제목</label>
          <Input
            name="title"
            type="text"
            value={title}
            onChange={onChangeTitle}
            required
          />
        </div>
        <div>
          <Input.TextArea
            value={content}
            onChange={onChangeContent}
            placeholder="컨텐츠를 적어주세요"
          />
        </div>
        <div>
          <DatePicker
            selected={startDateTime}
            onChange={(date) => setStartDateTime(date)}
          />
        </div>
        <div>
          <DatePicker
            selected={endDateTime}
            onChange={(date) => setEndDateTime(date)}
          />
        </div>
        <div>
          <Button type="primary" htmlType="submit">
            게시글 생성
          </Button>
        </div>
      </Form>
      <BoardList board={board} />
    </div>
  );
};

export default CreateBoardForm;
