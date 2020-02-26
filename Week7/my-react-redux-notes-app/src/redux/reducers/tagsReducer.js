import { ADD_TAG, REMOVE_TAG } from '../actions/actions';

function tagsReducer(tags = ['TAG_GENERAL', 'TAG_IMPORTANT', 'TAG_OTHER'], action) {
  switch(action.type) {
    case ADD_TAG:
      return [
        ...tags,
        action.tagName
      ];
    case REMOVE_TAG:
      return tags.filter(tag => tag !== action.tagName);
    default:
      return tags;
  }
}

export default tagsReducer;