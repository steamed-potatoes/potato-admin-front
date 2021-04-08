import produce from 'immer';

export const initialState = {
  retrieveOrganizationLoading: false,
  retrieveOrganizationDone: false,
  retrieveOrganizationError: null,
  retrieveOrganization: [],
  changeCategoryLoading: false,
  changeCategoryDone: false,
  changeCategoryError: null,
};

export const RETRIEVE_ORGANIZATION_REQUEST = 'RETRIEVE_ORGANIZATION_REQUEST';
export const RETRIEVE_ORGANIZATION_SUCCESS = 'RETRIEVE_ORGANIZATION_SUCCESS';
export const RETRIEVE_ORGANIZATION_FAILURE = 'RETRIEVE_ORGANIZATION_FAILURE';

export const CHANGE_CATEGORY_REQUEST = 'CHANGE_CATEGORY_REQUEST';
export const CHANGE_CATEGORY_SUCCESS = 'CHANGE_CATEGORY_SUCCESS';
export const CHANGE_CATEGORY_FAILURE = 'CHANGE_CATEGORY_FAILURE';

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
      case CHANGE_CATEGORY_REQUEST:
        draft.changeCategoryLoading = true;
        draft.changeCategoryDone = false;
        draft.changeCategoryError = null;
        break;
      case CHANGE_CATEGORY_SUCCESS:
        draft.changeCategoryLoading = false;
        draft.changeCategoryDone = true;
        // draft.retrieveOrganization = action.data;
        break;
      case CHANGE_CATEGORY_FAILURE:
        draft.changeCategoryLoading = false;
        draft.changeCategoryError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
