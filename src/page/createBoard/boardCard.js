import React, { useState, useCallback } from 'react';
import { Card, Button } from 'antd';
import UpdateBoardForm from './updateBoardForm';

const BoardCard = ({ board }) => {
  const [updateFormOpened, setUpdateFormOpened] = useState(false);

  const onToggleUpdateForm = useCallback(() => {
    setUpdateFormOpened((prev) => !prev);
  }, []);

  return (
    <div>
      <Card
        title={board.title}
        extra={
          <Button.Group>
            <Button onClick={onToggleUpdateForm}>수정</Button>
            <Button>삭제</Button>
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
