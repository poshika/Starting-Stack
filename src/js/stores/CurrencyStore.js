import { EventEmitter } from "events";

import Dispatcher from "../dispatcher/AppDispatcher";

import AppConstants from '../constants/AppConstants';
const ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var currencyData = {};

function setCurrencyData(data) {
  currencyData = data;
}

class CurrencyStore extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  getCurrencyData() {
    return currencyData;
  }

  handleAction(action) {
   switch(action.type) {
     case ActionTypes.GET_INFO: {
       setCurrencyData(action.data);
       this.emitChange();
     } break;
     default: console.log('caiu no default')
   }
 }
}

const currencyStore = new CurrencyStore;
Dispatcher.register(currencyStore.handleAction.bind(currencyStore));
export default currencyStore;
