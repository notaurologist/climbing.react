import { ADD_ROUTE, DELETE_ROUTE, EDIT_ROUTE } from '../constants/ActionTypes';
import {v4} from 'node-uuid';

let initialById = {};
let initialListedIds = [];

function route(state, action) {
  switch (action.type) {
    case ADD_ROUTE:
      return {
        name: action.name,
				type: action.type,
        id: v4(),
      };
    case EDIT_ROUTE:
      return Object.assign({}, state, {
        name: action.name,
				type: action.type,
      });
		default:
			return state;
  }
}

function byId(state = initialById, action) {
  switch (action.type) {
    case ADD_ROUTE:
    case EDIT_ROUTE:
      return Object.assign({}, state, {
        [action.id]: route(state[action.id], action),
      });
    default:
      return state;
  }
}

function listedIds(state = initialListedIds, action) {
  switch (action.type) {
    case ADD_ROUTE:
      return [action.id, ...state];
    case DELETE_ROUTE:
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
}

export default function routes(state = {}, action) {
  return {
    byId: byId(state.byId, action, state),
    listedIds: listedIds(state.listedIds, action, state),
  }
}
