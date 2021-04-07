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
  updateBoardLoading: false,
  updateBoardDone: false,
  updateBoardError: null,
};

export const CREATE_BOARD_REQUEST = 'CREATE_BOARD_REQUEST';
export const CREATE_BOARD_SUCCESS = 'CREATE_BOARD_SUCCESS';
export const CREATE_BOARD_FAILURE = 'CREATE_BOARD_FAILURE';

export const RETRIEVE_BOARD_REQUEST = 'RETRIEVE_BOARD_REQUEST';
export const RETRIEVE_BOARD_SUCCESS = 'RETRIEVE_BOARD_SUCCESS';
export const RETRIEVE_BOARD_FAILURE = 'RETRIEVE_BOARD_FAILURE';

export const UPDATE_BOARD_REQUEST = 'UPDATE_BOARD_REQUEST';
export const UPDATE_BOARD_SUCCESS = 'UPDATE_BOARD_SUCCESS';
export const UPDATE_BOARD_FAILURE = 'UPDATE_BOARD_FAILURE';

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
        draft.retrieveBoard = action.data;
        break;
      case RETRIEVE_BOARD_FAILURE:
        draft.retrieveBoardLoading = false;
        draft.retrieveBoardError = action.error;
        break;
      case UPDATE_BOARD_REQUEST:
        draft.updateBoardLoading = true;
        draft.updateBoardDone = false;
        draft.updateBoardError = null;
        break;
      case UPDATE_BOARD_SUCCESS: {
        draft.updateBoardLoading = false;
        draft.updateBoardDone = true;
        const findBoard = draft.retrieveBoard.find(
          (v) => v.id === action.data.id
        );
        findBoard.title = action.data.title;
        findBoard.content = action.data.content;
        findBoard.startDateTime = action.data.startDateTime;
        findBoard.endDateTime = action.data.endDateTime;
        break;
      }
      case UPDATE_BOARD_FAILURE:
        draft.updateBoardLoading = false;
        draft.updateBoardError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
