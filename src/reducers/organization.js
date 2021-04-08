import produce from 'immer';

export const initialState = {
  retrieveOrganizationLoading: false,
  retrieveOrganizationDone: false,
  retrieveOrganizationError: null,
  retrieveORganization: [],
};

export const RETRIEVE_ORGANIZATION_REQUEST = 'RETRIEVE_ORGANIZATION_REQUEST';
export const RETRIEVE_ORGANIZATION_SUCCESS = 'RETRIEVE_ORGANIZATION_SUCCESS';
export const RETRIEVE_ORGANIZATION_FAILURE = 'RETRIEVE_ORGANIZATION_FAILURE';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case RETRIEVE_ORGANIZATION_REQUEST:
        draft.retrieveOrganizationLoading = true;
        draft.retrieveOrganizationDone = false;
        draft.retrieveOrganizationError = null;
        break;
      case RETRIEVE_ORGANIZATION_SUCCESS:
        draft.retrieveOrganizationLoading = false;
        draft.retrieveOrganizationDone = true;
        draft.retrieveOrganization = action.data;
        break;
      case RETRIEVE_ORGANIZATION_FAILURE:
        draft.retrieveOrganizationLoading = false;
        draft.retrieveOrganizationError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
