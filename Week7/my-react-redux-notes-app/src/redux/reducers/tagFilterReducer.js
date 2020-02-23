import { SHOW_TAG_ALL, SHOW_TAG_GENERAL, SHOW_TAG_IMPORTANT, SHOW_TAG_OTHER, TAG_ALL, TAG_GENERAL, TAG_IMPORTANT, TAG_OTHER } from '../actions/actions';

function tagFilterReducer(tagFilter = TAG_ALL, action) {
  switch (action.type) {
    case SHOW_TAG_ALL:
      return TAG_ALL;
    case SHOW_TAG_GENERAL:
      return TAG_GENERAL;
    case SHOW_TAG_IMPORTANT:
      return TAG_IMPORTANT;
    case SHOW_TAG_OTHER:
      return TAG_OTHER;
    default:
      return tagFilter;
  }
}

export default tagFilterReducer;