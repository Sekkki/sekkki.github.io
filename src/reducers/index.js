import { combineReducers } from 'redux';
import User from './user';
import Auth from './auth';

const allReducers = combineReducers({
  user: User,
  auth: Auth
})

export default allReducers;
