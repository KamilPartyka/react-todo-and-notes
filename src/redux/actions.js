import axios from 'axios';
import {
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAILURE,
} from 'redux/actionsTypes';

export const addItem = (itemType, itemContent) => (dispatch, getState) => {
  dispatch({ type: ADD_ITEM_REQUEST });

  return axios
    .post('http://localhost:9000/api/note', {
      userID: getState().rootReducer.userID,
      type: itemType,
      ...itemContent,
    })
    .then(({ data }) =>
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: {
          itemType,
          data,
        },
      }),
    )
    .catch(() => dispatch({ type: ADD_ITEM_FAILURE }));
};

export const removeItem = (itemType, id) => (dispatch) => {
  dispatch({ type: REMOVE_ITEM_REQUEST });
  axios
    .delete(`http://localhost:9000/api/note/${id}`)
    .then(() =>
      dispatch({
        type: REMOVE_ITEM_SUCCESS,
        payload: {
          itemType,
          id,
        },
      }),
    )
    .catch(() => dispatch({ type: REMOVE_ITEM_FAILURE }));
};

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: AUTHENTICATE_REQUEST });

  return axios
    .post('http://localhost:9000/api/user/login', { username, password })
    .then((payload) => {
      dispatch({ type: AUTHENTICATE_SUCCESS, payload });
    })
    .catch(() => {
      dispatch({ type: AUTHENTICATE_FAILURE });
    });
};

export const register = (username, password) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  return axios
    .post('http://localhost:9000/api/user/register', { username, password })
    .then((payload) => {
      dispatch({ type: REGISTER_SUCCESS, payload });
    })
    .catch(() => {
      dispatch({ type: REGISTER_FAILURE });
    });
};

export const fetchItems = (itemType) => (dispatch, getState) => {
  dispatch({ type: FETCH_REQUEST });

  return axios
    .get('http://localhost:9000/api/notes/type', {
      params: {
        userID: getState().rootReducer.userID,
        type: itemType,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch(() => {
      dispatch({ type: FETCH_FAILURE });
    });
};
