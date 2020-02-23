import { ADD_NOTE, REMOVE_NOTE, STATUS_INACTIVE } from '../actions/actions';

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
      ]
    case REMOVE_NOTE:
      return notes.map(note => note.id === action.id ? { ...note, status: STATUS_INACTIVE} : note)
    default:
      return notes
  }
}

export default notesReducer;