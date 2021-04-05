import produce from 'immer';

export const initialState = {
  createBoardLoading: false,
  createBoardDone: false,
  createBoardError: null,
  retrieveBoardLoading: false,
  retrieveBoardDone: false,
  retrieveBoardError: null,
  adminBoard: [],
  retrieveBoard: [],
};

export const CREATE_BOARD_REQUEST = 'CREATE_BOARD_REQUEST';
export const CREATE_BOARD_SUCCESS = 'CREATE_BOARD_SUCCESS';
export const CREATE_BOARD_FAILURE = 'CREATE_BOARD_FAILURE';

export const RETRIEVE_BOARD_REQUEST = 'RETRIEVE_BOARD_REQUEST';
export const RETRIEVE_BOARD_SUCCESS = 'RETRIEVE_BOARD_SUCCESS';
export const RETRIEVE_BOARD_FAILURE = 'RETRIEVE_BOARD_FAILURE';

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
      case RETRIEVE_BOARD_REQUEST:
        draft.retrieveBoardLoading = true;
        draft.retrieveBoardDone = false;
        draft.retrieveBoardError = null;
        break;
      case RETRIEVE_BOARD_SUCCESS:
        draft.retrieveBoardLoading = false;
        draft.retrieveBoardDone = true;
        draft.retrieveBoard.concat(action.data);
        break;
      case RETRIEVE_BOARD_FAILURE:
        draft.retrieveBoardLoading = false;
        draft.retrieveBoardError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
