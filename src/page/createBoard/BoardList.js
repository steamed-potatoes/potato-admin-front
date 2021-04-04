import React from 'react';
import { useSelector } from 'react-redux';

const Board = () => {
  const { adminBoard } = useSelector((state) => state.board);

  return <div>{adminBoard}</div>;
};

export default Board;
