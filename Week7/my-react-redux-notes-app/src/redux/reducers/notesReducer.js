import { ADD_NOTE, REMOVE_NOTE, STATUS_INACTIVE, CHANGE_DELETED_TAG, TAG_OTHER } from '../actions/actions';

function notesReducer(notes = [], action) {
  switch(action.type) {
    case ADD_NOTE:
      return [
        ...notes,
        {
          id: action.id,
          title: action.title,
          content: action.content,
          dueDate: action.dueDate,
          tag: action.tag,
          createdDate: action.createdDate,
          status: action.status,
        }
      ];
    case CHANGE_DELETED_TAG:
      return notes.map(note => note.tag === action.deletedTag ? { ...note, tag: TAG_OTHER } : note);
    case REMOVE_NOTE:
      return notes.map(note => note.id === action.id ? { ...note, status: STATUS_INACTIVE} : note);
    default:
      return notes
  }
}

export default notesReducer;