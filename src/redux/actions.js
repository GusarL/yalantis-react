import { GET_BLOCK, GET_TRANSACTION, GET_USER_LIST } from './actionTypes';

export const getBlock = block => ({
  type: GET_BLOCK,
  payload: {
    block
  }
});

export const getTransaction = transaction => ({
  type: GET_TRANSACTION,
  payload: {
    transaction
  }
});

export const getUserList = userList => ({
  type: GET_USER_LIST,
  payload: {
    userList
  }
});

