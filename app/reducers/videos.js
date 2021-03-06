import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';
import {
  DELETE_VIDEO_REQUEST,
  DELETE_VIDEO_SUCCESS,
  DELETE_VIDEO_FAILURE,
  SELECT_VIDEO,
} from '../actions/videos';

const listByFilter = combineReducers({
  All: createList('All'),
  Uploaded: createList('Uploaded'),
  Flagged: createList('Flagged'),
});

const selectedVideos = (state = [], action) => {
  switch (action.type) {
    case SELECT_VIDEO:
      return action.ids;
    case DELETE_VIDEO_SUCCESS:
      return [];
    default:
      return state;
  }
};

const isDeleting = (state = false, action) => {
  switch (action.type) {
    case DELETE_VIDEO_REQUEST:
      return true;
    case DELETE_VIDEO_SUCCESS:
    case DELETE_VIDEO_FAILURE:
      return false;
    default:
      return state;
  }
};

const videos = combineReducers({
  byId,
  isDeleting,
  listByFilter,
  selectedVideos,
});

export default videos;

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.videos.listByFilter[filter]);

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.videos.listByFilter[filter]);

export const getSelectedVideos = (state) => {
  const selectedIds = state.videos.selectedVideos;
  return selectedIds.map(id => fromById.getVideo(state.videos.byId, id));
};

export const getVideoById = (state, id) =>
  state.videos.byId[id];

export const getVisibleVideos = (state, filter) => {
  const ids = fromList.getIds(state.videos.listByFilter[filter]);
  return ids.map(id => fromById.getVideo(state.videos.byId, id));
};

export const getIsDeleting = (state) =>
  state.videos.isDeleting;
