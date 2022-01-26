import {combineReducers} from 'redux';
import ageReducer from './ageReducer';
import nameReducer from './nameReducer';

const rootReducer = combineReducers({
  name:nameReducer,age:ageReducer
})

export default rootReducer;