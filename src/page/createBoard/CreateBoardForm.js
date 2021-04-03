import React, { useState, useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import sendApi from 'apis/sendApi';
import DatePicker from 'react-datepicker';
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

  // eslint-disable-next-line consistent-return
  const onSubmitForm = () => {
    console.log(title, content);
    if (!title || !title.trim()) {
      return alert('제목을 작성해주세요');
    }
    sendApi
      .createBoard(title, content, startDateTime, endDateTime)
      .then((response) => {
        console.log(response);
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
