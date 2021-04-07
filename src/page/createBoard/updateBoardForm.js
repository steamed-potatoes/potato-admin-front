import React, { useState, useCallback } from 'react';
import { Form, Button, Input } from 'antd';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { UPDATE_BOARD_REQUEST } from 'reducers/board';

const UpdateBoardForm = ({ board }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  const { id } = board;

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  });

  const onChangeContent = useCallback((e) => {
    setContent(e.target.value);
  });

  const onSubmitForm = () => {
    if (!title || !title.trim()) {
      return alert('제목을 작성해주세요');
    }
    return dispatch({
      type: UPDATE_BOARD_REQUEST,
      data: { adminBoardId: id, title, content, startDateTime, endDateTime },
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
            placeholder={board.title}
          />
        </div>
        <div>
          <Input.TextArea
            value={content}
            onChange={onChangeContent}
            placeholder={board.content}
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
            게시글 수정
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateBoardForm;
