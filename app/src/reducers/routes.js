import { ADD_ROUTE, DELETE_ROUTE, EDIT_ROUTE } from '../constants/ActionTypes';

let initialById = {};
let initialListedIds = [];

const STORE_SIZE = 10000;
for (let i = 0; i < STORE_SIZE; i++) {
  let nextId = 'prefilled-' + i
  initialListedIds.push(nextId)
  initialById[nextId] = {
    name: 'Item' + i,
    id: nextId,
    relatedId: i > 0 ? 'prefilled-' + (i - 1) : null,
  };
}

function route(state, action) {
  switch (action.type) {
    case ADD_ROUTE:
      return {
        name: action.name,
				type: action.type,
        id: action.id,
        relatedId: null,
      }
    case EDIT_ROUTE:
      return Object.assign({}, state, {
        name: action.name,
				type: action.type,
      }
  }
}

function byId(state = initialById, action) {
  switch (action.type) {
    case ADD_ROUTE:
    case EDIT_ROUTE:
      return Object.assign({}, state, {
        [action.id]: route(state[action.id], action),
      };
    default:
      return state
  }
}

function listedIds(state = initialListedIds, action) {
  switch (action.type) {
    case ADD_ROUTE:
      return [action.id, ...state]
    case DELETE_ROUTE:
      return state.filter(id => id !== action.id)
    default:
      return state
  }
}

export default function routes(state = {}, action) {
  return {
    byId: byId(state.byId, action, state),
    listedIds: listedIds(state.listedIds, action, state),
  }
}