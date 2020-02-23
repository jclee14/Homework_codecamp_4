import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import visibilityReducer from './visibilityReducer';
import idReducer from './idReducer';
import tagFilterReducer from './tagFilterReducer';

const reducers = combineReducers({
  notes: notesReducer,
  visibility: visibilityReducer,
  id: idReducer,
  tagFilter: tagFilterReducer,
});

export default reducers;