import produce from 'immer';

export const initialState = {
  createBoardLoading: false,
  createBoardDone: false,
  createBoardError: null,
  adminBoard: [],
};

export const CREATE_BOARD_REQUEST = 'CREATE_BOARD_REQUEST';
export const CREATE_BOARD_SUCCESS = 'CREATE_BOARD_SUCCESS';
export const CREATE_BOARD_FAILURE = 'CREATE_BOARD_FAILURE';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CREATE_BOARD_REQUEST:
        draft.createBoardLoading = true;
        draft.createBoardDone = false;
        draft.createBoardError = null;
        break;
      case CREATE_BOARD_SUCCESS:
        draft.createBoardLoading = false;
        draft.createBoardDone = true;
        draft.adminBoard.unshift(action.data);
        break;
      case CREATE_BOARD_FAILURE:
        draft.createBoardLoading = false;
        draft.createBoardError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
