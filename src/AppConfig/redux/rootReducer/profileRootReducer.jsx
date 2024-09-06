import {combineReducers} from 'redux';
import profileReducer from '../Reducer/profileReducer';

const profileRootReducer = combineReducers({
  picture: profileReducer,
});

export default profileRootReducer;
