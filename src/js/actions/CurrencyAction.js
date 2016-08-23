import Dispatcher from '../dispatcher/AppDispatcher';

import AppConstants from '../constants/AppConstants';
const ActionTypes = AppConstants.ActionTypes;

import axios from 'axios';
const url = 'http://api.fixer.io/';

function getInstance(){
  return axios.create({
    baseURL: url,
    timeout: 10000
  });
}

export function getInfo(valueBase) {
  const instance = getInstance();
  var path = '';

  if (valueBase !== '') {
    path += '?base=' + valueBase;
  }

  instance.get('/latest' + path).then(response => {
    Dispatcher.dispatch({
      type: ActionTypes.GET_INFO,
      data: response.data
    });
  });
}
