import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import compareReducer from './compareReducer';

const rootReducer = combineReducers({
  photosReducer,
  compareReducer
});

export default rootReducer;
