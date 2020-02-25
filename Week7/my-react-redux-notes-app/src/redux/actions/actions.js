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

export const SHOW_TAG_ALL = 'SHOW_TAG_ALL'
export const SHOW_TAG_GENERAL = 'SHOW_TAG_GENERAL'
export const SHOW_TAG_IMPORTANT = 'SHOW_TAG_IMPORTANT'
export const SHOW_TAG_OTHER = 'SHOW_TAG_OTHER'
export const TAG_ALL = 'TAG_ALL'
export const TAG_GENERAL = 'TAG_GENERAL';
export const TAG_IMPORTANT = 'TAG_IMPORTANT';
export const TAG_OTHER = 'TAG_OTHER';

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

export function showAllTag() {
  return { type: SHOW_TAG_ALL }
}

export function showGeneralTag() {
  return { type: SHOW_TAG_GENERAL }
}

export function showImportantTag() {
  return { type: SHOW_TAG_IMPORTANT }
}

export function showOtherTag() {
  return { type: SHOW_TAG_OTHER }
}