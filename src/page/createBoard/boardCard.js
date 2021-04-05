import React from 'react';
import { Descriptions } from 'antd';

const BoardCard = ({ board }) => {
  return (
    <div>
      <Descriptions>
        <Descriptions.Item label="title">{board.title}</Descriptions.Item>
        <Descriptions.Item label="content">{board.content}</Descriptions.Item>
        <Descriptions.Item label="startDateTime">
          {board.startDateTime}
        </Descriptions.Item>
        <Descriptions.Item label="endDateTime">
          {board.endDateTime}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default BoardCard;
