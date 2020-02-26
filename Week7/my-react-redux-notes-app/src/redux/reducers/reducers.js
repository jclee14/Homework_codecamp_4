import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import visibilityReducer from './visibilityReducer';
import idReducer from './idReducer';
import tagFilterReducer from './tagFilterReducer';
import tagsReducer from './tagsReducer';

const reducers = combineReducers({
  notes: notesReducer,
  visibility: visibilityReducer,
  id: idReducer,
  tagFilter: tagFilterReducer,
  tags: tagsReducer,
});

export default reducers;