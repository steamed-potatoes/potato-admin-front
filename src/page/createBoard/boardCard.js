import React, { useState, useCallback, useEffect } from 'react';
import { Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import UpdateBoardForm from './updateBoardForm';
import { REMOVE_BOARD_REQUEST } from '../../reducers/board';

const BoardCard = ({ board }) => {
  const dispatch = useDispatch();
  const [updateFormOpened, setUpdateFormOpened] = useState(false);
  const { removeBoardError } = useSelector((state) => state.board);

  const onToggleUpdateForm = useCallback(() => {
    setUpdateFormOpened((prev) => !prev);
  }, []);

  const onRemoveBoard = useCallback(() => {
    return dispatch({
      type: REMOVE_BOARD_REQUEST,
      data: { id: board.id },
    });
  }, []);

  useEffect(() => {
    if (removeBoardError) {
      alert(removeBoardError);
    }
  }, [removeBoardError]);

  return (
    <div>
      <Card
        title={board.title}
        extra={
          <Button.Group>
            <Button onClick={onToggleUpdateForm}>수정</Button>
            <Button type="danger" onClick={onRemoveBoard}>
              삭제
            </Button>
          </Button.Group>
        }
      >
        <p>id: {board.id}</p>
        <p>content: {board.content}</p>
        <p>startDateTime: {board.startDateTime}</p>
        <p>endDateTime: {board.endDateTime}</p>
      </Card>
      {updateFormOpened && <UpdateBoardForm board={board} />}
    </div>
  );
};

export default BoardCard;
