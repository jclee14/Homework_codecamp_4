import { ADD_TAG, REMOVE_TAG } from '../actions/actions';

function tagsReducer(tags = [], action) {
  switch(action.type) {
    case ADD_TAG:
      return [
        ...tags,
        action.tagName
      ]
    case REMOVE_TAG:
      return tags.map(tag => tag === action.tagName ? { ...note, status: STATUS_INACTIVE} : note)
    default:
      return notes
}

export default tagsReducer;