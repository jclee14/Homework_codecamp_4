//import { uniqueId } from 'lodash';

export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const STATUS_ACTIVE = 'STATUS_ACTICE';
export const STATUS_INACTIVE = 'STATUS_INACTIVE';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_INACTIVE = 'SHOW_INACTIVE';

export const ID_INCREASE = 'ID_INCREASE';

export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

export const CHANGE_TAG = 'CHANGE_TAG';
export const TAG_ALL = 'TAG_ALL';

export function addNote(id, title, content, dueDate, tag, createdDate) {
  return {
    id: id,
    type: ADD_NOTE,
    title: title,
    content: content,
    dueDate: dueDate,
    tag: tag,
    createdDate: createdDate,
    status: STATUS_ACTIVE,
  }
}

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id }
}

export function showActive() {
  return { type: SHOW_ACTIVE }
}

export function showInActive() {
  return { type: SHOW_INACTIVE }
}

export function increaseId() {
  return { type: ID_INCREASE }
}

export function addTag(tagName) {
  return {
    type: ADD_TAG,
    tagName: tagName,
  }
}

export function removeTag(tagName) {
  return {
    type: REMOVE_TAG,
    tagName: tagName,
  }
}

export function showFilterTag(selectedTag) {
  return {
    type: CHANGE_TAG,
    tag: selectedTag,
  }
}