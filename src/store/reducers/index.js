import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import loginReducer from './loginReducer';
import alertReducer from './alertReducer';
import loadReducer from './loadReducer';

const createRootReducer = () => {
  const reducers = combineReducers({
    todoReducer,
    loginReducer,
    alertReducer,
    loadReducer
  })
  return reducers;
}

export default createRootReducer;
