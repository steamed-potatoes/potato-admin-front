import React, { useState, useCallback, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import DatePicker from 'react-datepicker';
import Navbar from 'components/navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_BOARD_REQUEST } from '../../reducers/board';

const CreateBoardForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  const { createBoardDone } = useSelector((state) => state.board);

  useEffect(() => {
    if (createBoardDone) {
      setTitle('');
      setContent('');
      alert('게시글이 작성되었습니다.');
    }
  }, [createBoardDone]);

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
    return dispatch({
      type: CREATE_BOARD_REQUEST,
      data: { title, content, startDateTime, endDateTime },
    });
  };

  return (
    <Navbar>
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
    </Navbar>
  );
};

export default CreateBoardForm;
