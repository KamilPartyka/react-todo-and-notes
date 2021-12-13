import {
  REMOVE_ITEM_SUCCESS,
  ADD_ITEM_SUCCESS,
  AUTHENTICATE_SUCCESS,
  FETCH_SUCCESS,
} from 'redux/actionsTypes';

const initialState = {
  userID: '615c451b1254a51694927019',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        userID: action.payload.data._id,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          // eslint-disable-next-line no-underscore-dangle
          ...state[action.payload.itemType].filter((item) => item._id !== action.payload.id),
        ],
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    default:
      return state;
  }
};

export default rootReducer;
